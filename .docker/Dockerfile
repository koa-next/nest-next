From node:12.16.2-alpine

RUN mkdir -p /data

WORKDIR /data

COPY . /data

RUN npm install

ENV NODE_ENV production

RUN npm run build

RUN npm prune --production

CMD ["npm", "start"]
