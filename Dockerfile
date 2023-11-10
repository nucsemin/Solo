FROM node:16.20-alpine3.17 as build
WORKDIR /tmp/app/
COPY . .
RUN npm i
RUN npm run build:prod


FROM nginx:1.25.2-alpine
WORKDIR /app/
COPY --from=build /tmp/app/build/ .
COPY ./nginx.conf /etc/nginx/nginx.conf
# Указание порта для разработчика
EXPOSE 80
# Команда запуска nginx по дефолту. nginx не будет завершать работу после запуска.
CMD ["nginx", "-g", "daemon off;"]
