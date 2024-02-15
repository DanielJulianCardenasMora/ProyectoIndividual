const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Game",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Plataformas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Fecha_de_lanzamiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
