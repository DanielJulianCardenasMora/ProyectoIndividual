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
        allowNull: false,
      },
      background_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      released: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      platforms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
