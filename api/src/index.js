const server = require("./app");
const { sequelize } = require("./db");
require("dotenv").config();
// const { DB_PORT } = process.env || 3001;
const { DB_PORT } = require('../config')

sequelize
  .sync({ Force: true })
  .then(() => {
    server.listen(DB_PORT, () => {
      console.log("Server listening on port:", DB_PORT);
    });
  })
  .catch((err) => console.log(err));
