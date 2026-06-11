# syntax=docker/dockerfile:1

# ─── Base stage ─────────────────────────────────────────────
FROM node:20-alpine AS base
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.25.0

# Copy workspace manifests
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/*/package.json ./apps/
COPY packages/*/package.json ./packages/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code and build
COPY . .
RUN pnpm build

# ─── Dashboard runner ───────────────────────────────────────
FROM node:20-alpine AS dashboard
WORKDIR /app/apps/dashboard
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=base /app/apps/dashboard/.next ./.next
COPY --from=base /app/apps/dashboard/public ./public
COPY --from=base /app/apps/dashboard/package.json ./
COPY --from=base /app/node_modules ../../node_modules
COPY --from=base /app/packages ../../packages
COPY --from=base /app/pnpm-workspace.yaml ../../
COPY --from=base /app/package.json ../../
COPY --from=base /app/.env ../../

EXPOSE 3000
CMD ["node", "../../node_modules/next/dist/bin/next", "start"]

# ─── Worker runner ──────────────────────────────────────────
FROM node:20-alpine AS worker
WORKDIR /app
ENV NODE_ENV=production

# Copy workspace structure needed for workspace:* symlinks
COPY --from=base /app/package.json ./
COPY --from=base /app/pnpm-workspace.yaml ./
COPY --from=base /app/pnpm-lock.yaml ./
COPY --from=base /app/apps/worker/package.json ./apps/worker/
COPY --from=base /app/apps/worker/dist ./apps/worker/dist
COPY --from=base /app/packages ./packages
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.env ./.env

CMD ["node", "apps/worker/dist/index.js"]

# ─── Bot runner ─────────────────────────────────────────────
FROM node:20-alpine AS bot
WORKDIR /app
ENV NODE_ENV=production

COPY --from=base /app/package.json ./
COPY --from=base /app/pnpm-workspace.yaml ./
COPY --from=base /app/pnpm-lock.yaml ./
COPY --from=base /app/apps/bot/package.json ./apps/bot/
COPY --from=base /app/apps/bot/dist ./apps/bot/dist
COPY --from=base /app/packages ./packages
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.env ./.env

CMD ["node", "apps/bot/dist/bot.js"]
