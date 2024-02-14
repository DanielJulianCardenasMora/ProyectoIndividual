require('dotenv').config();
const axios = require("axios");
const { URL, API_KEY } = process.env;





// incluir los datos del genero al q esta asociado en vg/id

const getGameById = async (req, res) => {
  try {
    const gameId = req.params.id;
    const { data } = await axios.get(`${URL}games/${gameId}${API_KEY}`);
    const { id, name, background_image, background_image_additional, platforms, description, released, rating} = data;
    const gameFound = { id, name, background_image, background_image_additional, platforms, description, released, rating };

    return gameFound.name
      ? res.json(gameFound)
      : res.status(404).send("Not found.")
      
  } catch (error) {
    return res.status(404).send(error.message)
  }
}



module.exports = getGameById;