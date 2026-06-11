#!/bin/bash

COMPOSE_FILE="docker-compose.prod.yml"

if docker compose version &> /dev/null; then
    COMPOSE_CMD="docker compose"
else
    COMPOSE_CMD="docker-compose"
fi

SERVICE=${1:-worker}

echo "📋 Showing logs for: ${SERVICE}"
${COMPOSE_CMD} -f ${COMPOSE_FILE} logs -f ${SERVICE}
