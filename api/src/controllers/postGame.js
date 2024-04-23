const { Game } = require('../db')









const postGame = async (req, res) => {
  try {
    const { name, description, background_image, platforms, released, rating, Generos } = req.body;
    console.log(req.body)
    if (!name)
      return res.status(401).json({ message: "Please assing a name" });

      const newGame = await Game.create({
          name,
          description,
          background_image,
          platforms,
          released,
          rating,
      });
    
    const genreArray = Generos.map(genreId => parseInt(genreId, 10));
    newGame.addGenres(genreArray)

    
    res.status(200).json('Game added successfully!!!!!, go to "Find" to check created games');
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error });
  }
};

module.exports = postGame;



