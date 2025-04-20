# ═══════════════════════ Builder ═══════════════════════
FROM node:22-alpine3.20 AS builder

WORKDIR /app

COPY package.json package-lock.json tsconfig.json tsup.config.ts ./
RUN npm ci

COPY src ./src
RUN npm run build

ARG PRE_DEPLOY_CMD=""
RUN if [ -n "$PRE_DEPLOY_CMD" ]; then sh -c "$PRE_DEPLOY_CMD"; fi

RUN npm prune --production

# ═══════════════════════ Runtime ═══════════════════════
FROM node:22-alpine3.20 AS runner

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

USER app

ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", "build/index.js"]
