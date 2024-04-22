const server = require("./app");
const { sequelize } = require("./db");
require("dotenv").config();
// const { DB_PORT } = process.env || 3001;
const { PORT } = require('../config')

sequelize
  .sync({ Force: true })
  .then(() => {
    server.listen(PORT || `http://localhost:3001` , () => {
      console.log("Server listening on port:", PORT);
    });
  })
  .catch((err) => console.log(err));
