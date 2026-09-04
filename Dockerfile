# ========================================================
# Shortcut Master - Production Container Definition
# ========================================================
FROM node:20-alpine AS runner

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install production dependencies
RUN npm ci --only=production || npm install --production

# Copy application assets & source
COPY index.html ./
COPY server.js ./
COPY cli.js ./
COPY BLUEPRINT.md ./
COPY README.md* ./
COPY css/ ./css/
COPY js/ ./js/

# Set environment
ENV NODE_ENV=production
ENV PORT=8080

# Expose standard game port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Start the game server
CMD ["node", "server.js"]
