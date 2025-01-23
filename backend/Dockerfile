FROM node:22

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

ENV MONGODB_URI=mongodb://mongo:27017/task-manager

EXPOSE 3000

CMD ["npm", "run", "dev"]
