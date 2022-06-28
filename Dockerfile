FROM node:latest
WORKDIR  /TarekService
COPY . /TarekService
CMD ["bash"]
RUN npm install express
CMD ["node","index.js"]
