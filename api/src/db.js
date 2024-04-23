require("dotenv").config();
const { Sequelize } = require("sequelize");
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL, DB_PORT } = require('../config');
const { LOCAL_DB_USER, LOCAL_DB_PASSWORD, LOCAL_DB_HOST, LOCAL_DB_NAME, DATABASE_URL, DB_PORT } = process.env
const gameModel = require("./models/Game");
const genreModel = require("./models/Genre");
const modelModel = require("./models/Model");

// const sequelize = new Sequelize(
//   `postgres://${LOCAL_DB_USER}:${LOCAL_DB_PASSWORD}@${LOCAL_DB_HOST}/${LOCAL_DB_NAME}`,
//   { logging: false, native: false }
// );



const sequelize = new Sequelize(
  DATABASE_URL,
  { logging: false, native: false }
);


// let sequelize = new Sequelize({
//   database: DB_NAME,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   port: DB_PORT,
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: false,
//   },
// });

gameModel(sequelize);
genreModel(sequelize);
modelModel(sequelize);

const { Game, Genre, Model } = sequelize.models;



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
  Model,
  sequelize,
};
