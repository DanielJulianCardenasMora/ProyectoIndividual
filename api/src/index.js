const server = require("./app");
const { sequelize } = require("./db");
require("dotenv").config();
const { PORT } = process.env;

sequelize
  .sync({ Force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server listening on port:", PORT);
    });
  })
  .catch((err) => console.log(err));
