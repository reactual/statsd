FROM mhart/alpine-node:7
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
COPY . .
EXPOSE 8125/udp
EXPOSE 8126
USER node
CMD ["node", "stats.js", "config.js"]
