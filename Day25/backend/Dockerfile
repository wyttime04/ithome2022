FROM node:15 as build
WORKDIR /app

# cache package
COPY package*.json .
RUN npm install --legacy-peer-deps

# copy other files and build
COPY . .

VOLUME [ "/app/data" ]

CMD [ "npm", "run", "start" ]

# docker build -t test-backend:dev .
# docker run --rm -ti test-backend:dev
