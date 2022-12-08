FROM node

WORKDIR /usr/apprentx

COPY  package.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]