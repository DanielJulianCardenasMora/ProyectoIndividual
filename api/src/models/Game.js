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
        unique: true
      },
      Descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Fecha_de_lanzamiento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Rating: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Plataformas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
