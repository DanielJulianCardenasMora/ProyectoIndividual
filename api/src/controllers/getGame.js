require('dotenv').config();
const axios = require("axios");
const { URL, API_KEY } = process.env;

// https://api.rawg.io/api/games?key=60168d0ccdc54d229cb076e54698a8fa

// /videogames

// hacer que se creen las tablas de platform en este mismo codigo
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// hacer la primera iteracion al empezar desde el front


const getGame = async (req, res) => {
  try {
    let games = [];
    for (let i = 1; i < 6; i++) {
      const { data } = await axios
      .get(`${URL}games${API_KEY}&page=${i}`);
      const resultados = data.results.map(({ id, name, background_image, genres, rating}) => {
        

        const genresGame = genres.map(genre => genre.name).join(', ');
        
        return {
          id,
          name,
          background_image,
          genres: genresGame, 
          rating
        };
      });

      games.push(...resultados)
    }
 
    return res.status(200).json(games);

  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = getGame;



// ID.
// Nombre.
// Imagen.
// Plataformas.
// Descripción.
// Fecha de lanzamiento.
// Rating.
// Géneros.
