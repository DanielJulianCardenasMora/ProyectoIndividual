const { Game } = require('../db')









const postGame = async (req, res) => {
  try {
    const { name, description, background_image, platforms, released, rating, Generos } = req.query;

    if (!name)
      return res.status(401).json({ message: "Es necesario agregar un nombre" });

      const genreArray = Generos.split(',').map(genreId => {
        const idNumero = parseInt(genreId, 10);

        return idNumero;
      });
  
      const newGame = await Game.create({
          name,
          description,
          background_image,
          platforms,
          released,
          rating,
      });
   
    newGame.addGenres(genreArray)
    
    res.status(200).json('Agregaste el juego con exito!!!!!, dirigete a "Find" para ver tus juegos creados');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postGame;



