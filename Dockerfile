FROM node:latest
WORKDIR /
COPY package.json package-lock.json node_modules source.js backend.js frontend.html ./
RUN npm install
CMD ["npm", "start"]