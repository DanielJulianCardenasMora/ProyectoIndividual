const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Game",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      background_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      released: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rating: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      platforms: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
