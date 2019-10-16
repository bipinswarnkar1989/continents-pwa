# Stage 1 - the dev environment
FROM node:12.11.1-alpine as build-deps

WORKDIR /app

COPY package.json yarn.lock  ./

RUN yarn --frozen-lockfile

COPY . ./

EXPOSE 3000

RUN yarn build

# Stage 2 - the production environment
FROM node:12.11.1-alpine

RUN yarn global add serve

WORKDIR /app

COPY --from=build-deps /app/build .

EXPOSE 5000

CMD ["serve", "-p", "5000", "-s", "build"]
