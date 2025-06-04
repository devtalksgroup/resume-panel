FROM node:22.13.1-alpine AS build

WORKDIR /app/

ENV PATH /opt/node_modules/.bin:$PATH
RUN npm i -g pnpm
COPY ./package.json ./pnpm-lock.yaml ./

# RUN yarn install && yarn cache clean
RUN pnpm i

COPY . .

RUN pnpm postinstall
RUN pnpm build

EXPOSE 3000

CMD ["pnpm","start"]