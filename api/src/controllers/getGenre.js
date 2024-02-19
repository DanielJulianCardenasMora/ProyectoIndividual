const axios = require("axios");
require('dotenv').config()
const { URL, API_KEY } = process.env
const { Genre } = require('../db')


    



const getGenre = async (req, res) => {
  try {
    let genres = [];
      const { data } = await axios.get(`${URL}genres${API_KEY}`);
      const resultados = data.results.map(
        ({
          name
        }) => ({
          Nombre: name
        })
      );
      genres.push(...resultados);

    const crear = await Genre.bulkCreate(genres)

    const allGenres = await Genre.findAll()

    return res.status(200).json(allGenres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = getGenre;

