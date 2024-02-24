const { Game } = require('../db')

// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego. 




const postGame = async (req, res) => {
  try {
    const { name, description, background_image, platforms, released, rating, Generos } = req.query;

    if (!name)
      return res.status(401).json({ message: "Es necesario agregar un nombre" });

      const newGame = await Game.create({
   
          name,
          description,
          background_image,
          platforms,
          released,
          rating,
        
      });

    newGame.addGenres(Generos)
    
    res.status(200).json('Agregaste el juego con exito!!!!!, dirigete al boton "Find" para ver tus juegos creados');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postGame;



