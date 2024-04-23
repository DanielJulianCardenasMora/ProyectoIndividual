const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define(
    "Model",
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
