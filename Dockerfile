FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN NODE_OPTIONS=--max_old_space_size=8192 yarn build

FROM nginx:latest
WORKDIR /app
RUN rm -rf ./*

COPY --from=builder /app/.output/public/ .
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]