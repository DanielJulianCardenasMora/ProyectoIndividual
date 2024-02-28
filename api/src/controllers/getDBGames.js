const { Game } = require('../db')
const { Genre } = require('../db')


    



const getDBGames = async (req, res) => {
  try {  
    const data = await Game.findAll({
      include: {
        model: Genre,
        through: {
          attributes: [],
        },
      },
    });
    
    const gamesDataValues = data.map(({ dataValues }) => dataValues);
    const gamesData = gamesDataValues.map(({ id, name, description, background_image, released, rating, platforms, Genres }) => {
      return {
        id,
        name,
        description,
        background_image,
        released,
        rating,
        platforms,
        genres: Genres ? Genres.map((genre) => genre.Nombre).join(", ") : []
      };
    });
    
    return res.status(200).json(gamesData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = getDBGames;