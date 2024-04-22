require('dotenv').config();
const axios = require("axios");
const { URL, API_KEY } = process.env;







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
    console.log(error)
    res.status(500).json({ message: error });
  }
};


module.exports = getGame;
