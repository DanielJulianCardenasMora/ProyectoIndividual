const { DataTypes } = require("sequelize");









module.exports = (sequelize) => {
  sequelize.define(
    "Genre",
    {
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
