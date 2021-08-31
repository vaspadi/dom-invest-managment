
FROM node:14

ARG VUE_APP_BASE_API
ENV VUE_APP_BASE_API ${VUE_APP_BASE_API}
ARG VUE_APP_PORT
ENV VUE_APP_PORT ${VUE_APP_PORT}

RUN mkdir -p /app
WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

EXPOSE 80
CMD [ "yarn", "start" ]
