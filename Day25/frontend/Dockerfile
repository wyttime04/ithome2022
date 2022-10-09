FROM node:15 as build
WORKDIR /app

# cache package
COPY package*.json .
RUN npm install

# copy other files and build
COPY . .

RUN npm run build


FROM nginx:1.21.6 as publish
EXPOSE 80

COPY --from=build /app/dist /var/www/html/
# COPY --from=build /app/react-nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod a+x /docker-entrypoint.sh

ENV BACKEND_URL=backend


# docker build -t test-frontend:dev .
# docker run --rm -ti -e BACKEND_URL=url test-frontend:dev