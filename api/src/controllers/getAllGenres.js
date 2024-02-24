const axios = require("axios");
const { Genre } = require('../db')


    



const getAllGenres = async (req, res) => {
  try {
    const allGenres = await Genre.findAll()

    return res.status(200).json(allGenres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = getAllGenres;

