require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL, DB_PORT } = require('../config');
const gameModel = require("./models/Game");
const genreModel = require("./models/Genre");

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   { logging: false, native: false }
// );

// const sequelize = new Sequelize(
//   DATABASE_URL,
//   { logging: false, native: false }
// );

let sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: false,
  },
});

gameModel(sequelize);
genreModel(sequelize);

const { Game, Genre } = sequelize.models;


Game.belongsToMany(Genre, {
  through: 'Game_Genre',
  foreignKey: 'gameID',
  timestamps: false
})
Genre.belongsToMany(Game, {
  through: 'Game_Genre',
  foreignKey: 'genreID',
  timestamps: false
})

module.exports = {
  Game,
  Genre,
  sequelize,
};
