const axios = require("axios");
const { Game } = require('../db')


    



const getDBGames = async (req, res) => {
  try {
    const allDBGames = await Game.findAll()

    return res.status(200).json(allDBGames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = getDBGames;