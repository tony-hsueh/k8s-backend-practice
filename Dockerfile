# syntax=docker/dockerfile:1
FROM node:20-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json & package-lock.json
COPY package*.json ./

# install app dependencies
RUN npm install

# 複製後端檔案
COPY . .

# 對外暴露 port
EXPOSE 3000

# 啟動應用程式
CMD ["node", "server.js"]
