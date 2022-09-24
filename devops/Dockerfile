FROM node:alpine
WORKDIR /app
COPY /frontend.tar.gz /app
RUN tar -xvf frontend.tar.gz
RUN npm i
CMD ["npm", "run", "start"]