require('dotenv').config();
const axios = require("axios");
const { URL, API_KEY } = process.env;



const getGameQuery = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      return res.status(404)
        .send('Escoge una palabra clave y ponla en la barra para traerte la maxima informacion')
    } else {
      const {data} = await axios
        .get(`${URL}games${API_KEY}&search=${name}`);
      const juegosCoincidentes = data.results.slice(0, 15)
      const resultados = juegosCoincidentes.map(({ id, name, background_image, genres, rating}) => {
        const genresGame = genres.map(genre => genre.name).join(', ');
        
        return {
          id,
          name,
          background_image,
          genres: genresGame, 
          rating
        };
      });

      return resultados.length
      ? res.status(200).json(resultados)
      : res.status(404).send("No tengo un juego con ese nombre.")
    }
  }
  catch (error) {
    return res.status(404).send(error.message)
  }
}


      

module.exports = getGameQuery;