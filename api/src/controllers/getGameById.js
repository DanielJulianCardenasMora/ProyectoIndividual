require('dotenv').config();
const axios = require("axios");
const { URL, API_KEY } = process.env;
const { Game } = require('../db')
const { Genre } = require('../db')








const getGameById = async (req, res) => {
  const gameId = req.params.id;

  if (gameId.length < 7) {
    try {
      const { data } = await axios.get(`${URL}games/${gameId}${API_KEY}`);
      const { id, name, background_image, background_image_additional, platforms, description, released, rating, genres} = data;
      const platformNames = platforms.map((platform) => platform.platform.name).join(", ");
      const genresGame = genres.map(genre => genre.name).join(', ');
  
      const gameToSend = {
        id,
        name,
        background_image,
        background_image_additional,
        platforms: platformNames,
        description,
        released,
        rating,
        genres: genresGame
      };
  
      return gameToSend.name
        ? res.json(gameToSend)
        : res.status(404).send("Not found.")
      
    } catch (error) {
      return res.status(404).send(error.message)
    }

  } else {
    try {
      const data = await Game.findOne({
        where: { id: gameId },
        include: {
          model: Genre,
          through: {
            attributes: [],
          },
        },

      });
      const { id, name, background_image, platforms, description, released, rating, Genres } = data
      const gameSend = {
        id,
        name,
        background_image,
        platforms,
        description,
        released,
        rating,
        genres: data.Genres ? data.Genres.map((genre) => genre.Nombre).join(", ") : [],
      }
  

      return gameSend.name
        ? res.json(gameSend)
        : res.status(404).send("Not found.")

    } catch (error) {
      return res.status(404).send(error.message)
    }
  }
}



module.exports = getGameById;