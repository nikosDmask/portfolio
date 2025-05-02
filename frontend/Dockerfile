# 1) Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy lockfiles & manifest
COPY package.json package-lock.json ./

# Install deps
RUN npm ci

# Rebuild esbuild for Alpine (fix version mismatch)
RUN npm rebuild esbuild --build-from-source

 # pin esbuild to the version vite wants, then rebuild it for Alpine
RUN npm install esbuild@0.25.3 --save-dev
RUN npm rebuild esbuild --build-from-source

# Copy rest of app and build
COPY . .
RUN npm run build

# 2) Serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
