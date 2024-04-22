const server = require("./app");
const { sequelize } = require("./db");
require("dotenv").config();
const { PORT } = process.env.DB_PORT || 3001;

sequelize
  .sync({ Force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server listening on port:", PORT);
    });
  })
  .catch((err) => console.log(err));
