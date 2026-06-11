#!/bin/bash
set -e

# AlphaCouncil — Systemd Installation Script
# Usage: sudo ./scripts/install-systemd.sh

INSTALL_DIR="/opt/alphacouncil"
USER="alphacouncil"
GROUP="alphacouncil"

echo "🚀 AlphaCouncil Systemd Installation"
echo "====================================="

# ─── Check root ────────────────────────────────────────────
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root: sudo $0"
    exit 1
fi

# ─── Check prerequisites ───────────────────────────────────
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Install Node.js 20+ first:"
    echo "   curl -fsSL https://deb.nodesource.com/setup_20.x | bash -"
    echo "   apt-get install -y nodejs"
    exit 1
fi

if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Installing..."
    npm install -g pnpm@10.25.0
fi

if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL not found. Please install PostgreSQL 16 + pgvector:"
    echo "   sudo apt install postgresql-16 postgresql-contrib"
    echo "   Then install pgvector extension."
    exit 1
fi

# ─── Create user ───────────────────────────────────────────
if ! id "$USER" &>/dev/null; then
    echo "👤 Creating user: $USER"
    useradd -r -s /bin/false -d "$INSTALL_DIR" -m "$USER"
else
    echo "👤 User $USER already exists"
fi

# ─── Prepare install directory ─────────────────────────────
if [ ! -d "$INSTALL_DIR" ]; then
    echo "📁 Creating $INSTALL_DIR"
    mkdir -p "$INSTALL_DIR"
fi

# If current directory is the repo root, copy it
if [ -f "package.json" ] && grep -q "alphacouncil" package.json 2>/dev/null; then
    echo "📦 Copying project to $INSTALL_DIR"
    rsync -av --exclude='node_modules' --exclude='.git' --exclude='.next' \
        ./ "$INSTALL_DIR/" || cp -r . "$INSTALL_DIR/"
fi

chown -R "$USER:$GROUP" "$INSTALL_DIR"

# ─── Install dependencies & build ──────────────────────────
echo "📦 Installing dependencies..."
su -s /bin/bash "$USER" -c "cd $INSTALL_DIR && pnpm install --frozen-lockfile"

echo "🔨 Building project..."
su -s /bin/bash "$USER" -c "cd $INSTALL_DIR && pnpm build"

# ─── Database setup ────────────────────────────────────────
echo "🐘 Setting up database..."
DB_NAME="memorygraph"
DB_USER="mantle"
DB_PASS="${DB_PASSWORD:-memorygraph}"

sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME';" | grep -q 1 || \
    sudo -u postgres psql -c "CREATE DATABASE $DB_NAME;"

sudo -u postgres psql -tc "SELECT 1 FROM pg_roles WHERE rolname = '$DB_USER';" | grep -q 1 || \
    sudo -u postgres psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';"

sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
sudo -u postgres psql -d "$DB_NAME" -c "ALTER USER $DB_USER WITH SUPERUSER;" 2>/dev/null || true

# Ensure .env exists with DATABASE_URL
ENV_FILE="$INSTALL_DIR/.env"
if [ ! -f "$ENV_FILE" ]; then
    echo "📝 Creating $ENV_FILE..."
    cat > "$ENV_FILE" <<EOF
DATABASE_URL=postgresql://$DB_USER:$DB_PASS@localhost:5432/$DB_NAME
LLM_PROVIDER=mock
EOF
    chown "$USER:$GROUP" "$ENV_FILE"
fi

# Apply Prisma schema
export DATABASE_URL="postgresql://$DB_USER:$DB_PASS@localhost:5432/$DB_NAME"
su -s /bin/bash "$USER" -c "export DATABASE_URL='$DATABASE_URL' && cd $INSTALL_DIR/packages/database && pnpm push"

# ─── Install systemd units ─────────────────────────────────
echo "⚙️  Installing systemd services..."
cp systemd/*.service /etc/systemd/system/
systemctl daemon-reload

systemctl enable alphacouncil-dashboard
systemctl enable alphacouncil-worker
systemctl enable alphacouncil-bot

# ─── Install nginx config (optional) ───────────────────────
if [ -d "/etc/nginx/sites-available" ]; then
    echo "🌐 Installing nginx config..."
    cp nginx/nginx-systemd.conf /etc/nginx/sites-available/alphacouncil
    ln -sf /etc/nginx/sites-available/alphacouncil /etc/nginx/sites-enabled/alphacouncil
    nginx -t && systemctl reload nginx || echo "⚠️  Nginx config test failed"
fi

# ─── Start services ────────────────────────────────────────
echo "🚀 Starting services..."
systemctl start alphacouncil-worker
systemctl start alphacouncil-dashboard
# systemctl start alphacouncil-bot

echo ""
echo "✅ AlphaCouncil installed successfully!"
echo ""
echo "Services:"
echo "  Dashboard: http://$(hostname -I | awk '{print $1}')"
echo ""
echo "Management:"
echo "  sudo systemctl status alphacouncil-dashboard"
echo "  sudo systemctl status alphacouncil-worker"
echo "  sudo journalctl -u alphacouncil-worker -f"
echo ""
echo "To start Telegram bot:"
echo "  sudo systemctl start alphacouncil-bot"
echo ""
