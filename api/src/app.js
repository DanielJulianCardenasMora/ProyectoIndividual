const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const server = express();






server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:5173', 'https://proyecto-individual-gilt.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())
server.use('/mundoVideoJuegos', router)


module.exports = server;
