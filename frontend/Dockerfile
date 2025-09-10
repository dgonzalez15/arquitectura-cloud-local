# Dockerfile para Next.js SSR (producción y local)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY .env.local ./
RUN npm install --frozen-lockfile
COPY . .
RUN rm -rf .next && npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app .
EXPOSE 80
CMD ["npm", "start"]
