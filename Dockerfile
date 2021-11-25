FROM node:16

ENV MODE=production

WORKDIR /usr/src/app/frontend

COPY . .

RUN yarn

RUN yarn build

EXPOSE 80

CMD ["yarn", "start"]
