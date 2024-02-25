require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const gameModel = require("./models/Game");
const genreModel = require("./models/Genre");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

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
