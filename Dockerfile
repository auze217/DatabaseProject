FROM node:latest
WORKDIR /
COPY package.json styles.css .dockerignore cutie.jpg source.js backend.js frontend.html ./
RUN npm install
CMD ["npm", "start"]