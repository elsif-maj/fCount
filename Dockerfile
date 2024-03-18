FROM node:20.11
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3100
ENV TEST_API_KEY 1234
CMD [ "npm", "start" ]