const { DataTypes } = require("sequelize");










module.exports = (sequelize) => {
  sequelize.define(
    "Genre",
    {
      ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
