#!/bin/bash
set -e

# AlphaCouncil — Production Deployment Script
# Usage: ./scripts/deploy.sh [bot]

PROJECT_NAME="alphacouncil"
COMPOSE_FILE="docker-compose.prod.yml"

echo "🚀 AlphaCouncil — Production Deploy"
echo "===================================="

# Check prerequisites
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    exit 1
fi

if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not installed"
    exit 1
fi

# Determine compose command
if docker compose version &> /dev/null; then
    COMPOSE_CMD="docker compose"
else
    COMPOSE_CMD="docker-compose"
fi

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env not found. Copying from .env.example..."
    cp .env.example .env
    echo "📝 Please edit .env with your production values before continuing."
    exit 1
fi

# Build and start
${COMPOSE_CMD} -f ${COMPOSE_FILE} pull db nginx 2>/dev/null || true
${COMPOSE_CMD} -f ${COMPOSE_FILE} build --no-cache

# Start core services (db, dashboard, worker, nginx)
${COMPOSE_CMD} -f ${COMPOSE_FILE} up -d db dashboard worker nginx

# Optionally start bot
if [ "$1" = "bot" ]; then
    echo "🤖 Starting Telegram bot..."
    ${COMPOSE_CMD} -f ${COMPOSE_FILE} --profile bot up -d bot
fi

echo ""
echo "✅ AlphaCouncil is running!"
echo ""
echo "Services:"
echo "  Dashboard: http://localhost (via nginx)"
echo "  Dashboard (direct): http://localhost:3000"
echo "  Database:  localhost:5432 (internal only)"
echo ""
echo "Logs:"
echo "  ${COMPOSE_CMD} -f ${COMPOSE_FILE} logs -f worker"
echo "  ${COMPOSE_CMD} -f ${COMPOSE_FILE} logs -f dashboard"
echo ""
