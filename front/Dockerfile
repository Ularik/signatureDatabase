# === Этап 1: Сборка React приложения ===
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# === Этап 2: Настройка Nginx ===
FROM nginx:stable-alpine

# Удаляем дефолтный конфиг Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наш собственный конфиг из папки front
COPY nginx.conf /etc/nginx/conf.d

# Копируем собранный проект из первого этапа
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]