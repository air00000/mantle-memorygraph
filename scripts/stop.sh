#!/bin/bash
set -e

COMPOSE_FILE="docker-compose.prod.yml"

if docker compose version &> /dev/null; then
    COMPOSE_CMD="docker compose"
else
    COMPOSE_CMD="docker-compose"
fi

echo "🛑 Stopping AlphaCouncil..."
${COMPOSE_CMD} -f ${COMPOSE_FILE} down

echo "✅ Stopped"
