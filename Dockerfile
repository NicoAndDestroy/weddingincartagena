# Multi-stage Dockerfile for Astro SSR Application
# Optimized for production deployment with Dokploy

# ================================
# Stage 1: Dependencies
# ================================
FROM node:24-alpine AS deps
WORKDIR /app

# Install system dependencies for native modules
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies with cache mount for faster builds
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production --ignore-scripts && \
    npm cache clean --force

# ================================
# Stage 2: Builder
# ================================
FROM node:24-alpine AS builder
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN --mount=type=cache,target=/root/.npm \
    npm ci --ignore-scripts

# Copy source code
COPY . .


# Build the application
RUN npm run build

# ================================
# Stage 3: Runtime
# ================================
FROM node:24-alpine AS runner
WORKDIR /app

# Install system dependencies for runtime
RUN apk add --no-cache \
    tini \
    && addgroup -g 1001 -S nodejs \
    && adduser -S astro -u 1001

# Copy production dependencies from deps stage
COPY --from=deps --chown=astro:nodejs /app/node_modules ./node_modules

# Copy built application from builder stage
COPY --from=builder --chown=astro:nodejs /app/dist ./dist
COPY --from=builder --chown=astro:nodejs /app/package.json ./package.json

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4545
# Expose port
EXPOSE $PORT

# Switch to non-root user
USER astro

# # Add health check
# HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
#     CMD node -e "require('http').get('http://localhost:${PORT}/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) }).on('error', () => process.exit(1))" || exit 1

# Use tini for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Start the application
CMD ["node", "./dist/server/entry.mjs"]
