const axios = require("axios");
const { Game } = require('../db');

    



const getDBGameGenre = async (req, res) => {
  try {
    const [results] = await Game.findAll({
      include: [
        {
          model: Genre,
          through: {
            table: 'Game_Model',
            attributes: [],
          },
        },
      ],
    });

    return res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = getDBGameGenre;