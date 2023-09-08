FROM node:lts-alpine3.10
ENV PORT=3012
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", ".babelrc", "./"]
RUN npm install --silent
COPY . .
EXPOSE 3012
CMD ["npm", "start"]
