FROM node:18.13.0

WORKDIR /app

COPY "package.json" "package.json"

RUN yarn install

COPY . .

CMD ["yarn", "start"]