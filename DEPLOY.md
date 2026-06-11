# AlphaCouncil — Production Deployment Guide

> Deploy AlphaCouncil stack (Dashboard + Worker + Bot + PostgreSQL + nginx) to a server using Docker Compose.

---

## Prerequisites

- **Server** with Docker & Docker Compose installed
- **Node.js 20+** (only if building locally before push)
- **Domain** (optional, for HTTPS with certbot)
- **Ports**: 80, 443, 3000 (optional, internal), 5432 (optional, internal)

### Install Docker (Ubuntu/Debian)

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker
```

---

## 1. Clone & Configure

```bash
git clone <your-repo-url> alphacouncil
cd alphacouncil/mantle-memorygraph   # или cd alphacouncil если это корень
```

### Environment Variables

```bash
cp .env.example .env
nano .env
```

**Required for all modes:**
```ini
DATABASE_URL=postgresql://mantle:memorygraph@db:5432/memorygraph
```

**Required for live AI digests:**
```ini
LLM_PROVIDER=groq
LLM_API_KEY=gsk_your_key_here
```

**Required for Telegram bot (optional):**
```ini
TELEGRAM_BOT_TOKEN=your_bot_token
```

**Required for on-chain anchoring (optional):**
```ini
PRIVATE_KEY=your_private_key_without_0x
OBSERVATION_REGISTRY_ADDRESS=0x...
```

---

## 2. Deploy

### Option A: Build & run on server

```bash
./scripts/deploy.sh
```

To also start the Telegram bot:
```bash
./scripts/deploy.sh bot
```

### Option B: Pre-build images locally, push to registry

```bash
# Build all targets
docker build --target dashboard -t your-registry/alphacouncil-dashboard:latest .
docker build --target worker -t your-registry/alphacouncil-worker:latest .
docker build --target bot -t your-registry/alphacouncil-bot:latest .

# Push
docker push your-registry/alphacouncil-dashboard:latest
docker push your-registry/alphacouncil-worker:latest
docker push your-registry/alphacouncil-bot:latest
```

Then on the server, update `docker-compose.prod.yml` to use `image:` instead of `build:`.

---

## 3. Verify

```bash
# Check all containers are running
docker ps

# Check logs
./scripts/logs.sh worker
./scripts/logs.sh dashboard
./scripts/logs.sh bot

# Open dashboard
open http://YOUR_SERVER_IP
```

---

## 4. Management Commands

```bash
# Stop all services
./scripts/stop.sh

# Restart worker only
docker compose -f docker-compose.prod.yml restart worker

# View database
DOCKER_COMPOSE=docker compose -f docker-compose.prod.yml
$DOCKER_COMPOSE exec db psql -U mantle -d memorygraph

# Update after code changes
./scripts/deploy.sh
```

---

## 5. HTTPS with Let's Encrypt (Recommended)

```bash
# Install certbot
sudo apt install certbot

# Obtain certificate
sudo certbot certonly --standalone -d your-domain.com

# Update docker-compose.prod.yml nginx volumes:
#   - /etc/letsencrypt:/etc/letsencrypt:ro
# Update nginx/nginx.conf with SSL listen 443
```

Example SSL server block:
```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    location / {
        proxy_pass http://dashboard:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$host$request_uri;
}
```

---

## 6. Troubleshooting

| Issue | Solution |
|-------|----------|
| `DATABASE_URL` connection refused | Make sure `db` container is healthy before worker starts. docker-compose `depends_on` with `condition: service_healthy` handles this. |
| Dashboard shows 502 Bad Gateway | Check `dashboard` container logs: `docker compose -f docker-compose.prod.yml logs dashboard` |
| Worker not processing events | Check worker logs and `.env` LLM settings |
| Bot not responding | Ensure `TELEGRAM_BOT_TOKEN` is set and bot profile is started with `./scripts/deploy.sh bot` |
| Port 80 already in use | Change nginx port mapping in `docker-compose.prod.yml` to `"8080:80"` |

---

## Architecture on Server

```
┌─────────────────────────────────────────────┐
│                    Server                    │
│  ┌─────────┐  ┌─────────┐  ┌─────────────┐ │
│  │  nginx  │  │dashboard│  │   worker    │ │
│  │  :80    │  │  :3000  │  │  (bg proc)  │ │
│  └────┬────┘  └────┬────┘  └─────┬───────┘ │
│       │            │             │         │
│  ┌────┴────────────┴─────────────┴───────┐ │
│  │         alphacouncil-net              │ │
│  └──────────────────┬────────────────────┘ │
│                     │                      │
│              ┌──────┴──────┐               │
│              │  db:5432    │               │
│              │ PostgreSQL  │               │
│              │ + pgvector  │               │
│              └─────────────┘               │
└─────────────────────────────────────────────┘
```

---

---

## Appendix A: Systemd Deployment (No Docker)

If you prefer to run AlphaCouncil directly on the host without Docker, use the provided systemd services.

### Prerequisites

- **Ubuntu/Debian** server
- **Node.js 20+**
- **pnpm** (`npm install -g pnpm@10.25.0`)
- **PostgreSQL 16** with `pgvector` extension
- **nginx**

### Quick Install

```bash
# 1. Clone repo
git clone <your-repo-url> /opt/alphacouncil
cd /opt/alphacouncil/mantle-memorygraph

# 2. Configure environment
cp .env.example .env
nano .env
# Set DATABASE_URL=postgresql://mantle:memorygraph@localhost:5432/memorygraph

# 3. Run installer (as root)
sudo ./scripts/install-systemd.sh
```

The installer will:
- Create `alphacouncil` user
- Install dependencies and build the project
- Set up PostgreSQL database and user
- Install systemd unit files
- Configure nginx (if available)
- Start dashboard and worker services

### Manage Services

```bash
# Status
sudo systemctl status alphacouncil-dashboard
sudo systemctl status alphacouncil-worker
sudo systemctl status alphacouncil-bot

# Logs
sudo journalctl -u alphacouncil-worker -f
sudo journalctl -u alphacouncil-dashboard -f

# Restart
sudo systemctl restart alphacouncil-worker
sudo systemctl restart alphacouncil-dashboard

# Start/stop bot
sudo systemctl start alphacouncil-bot
sudo systemctl stop alphacouncil-bot

# Update after code changes
cd /opt/alphacouncil/mantle-memorygraph
sudo git pull
sudo -u alphacouncil pnpm install --frozen-lockfile
sudo -u alphacouncil pnpm build
sudo systemctl restart alphacouncil-dashboard alphacouncil-worker
```

### File Locations

| Component | Path |
|-----------|------|
| Project code | `/opt/alphacouncil` |
| Systemd units | `/etc/systemd/system/alphacouncil-*.service` |
| Nginx config | `/etc/nginx/sites-available/alphacouncil` |
| Logs | `journalctl -u alphacouncil-*` |

### Architecture (Systemd)

```
┌─────────────────────────────────────────────┐
│                    Server                    │
│  ┌─────────┐  ┌─────────┐  ┌─────────────┐ │
│  │  nginx  │  │dashboard│  │   worker    │ │
│  │  :80    │  │  :3000  │  │  (systemd)  │ │
│  └────┬────┘  └────┬────┘  └─────┬───────┘ │
│       └────────────┴─────────────┘         │
│                     │                      │
│              ┌──────┴──────┐               │
│              │  localhost  │               │
│              │  :5432      │               │
│              │ PostgreSQL  │               │
│              │ + pgvector  │               │
│              └─────────────┘               │
└─────────────────────────────────────────────┘
```

---

**This is a neutral observation, not a trading recommendation.**
