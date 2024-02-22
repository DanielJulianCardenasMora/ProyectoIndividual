const { Game } = require('../db')

// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego. 




const postGame = async (req, res) => {
  try {
    const { Nombre, Descripcion, Imagen, Plataformas, Fecha_de_lanzamiento, Rating, Generos } = req.query;

    if (!Nombre)
      return res.status(401).json({ message: "Es necesario agregar un nombre" });

      const newGame = await Game.create({
   
          Nombre,
          Descripcion,
          Imagen,
          Plataformas,
          Fecha_de_lanzamiento,
          Rating,
        
      });

    newGame.addGenres(Generos)
    
    res.status(200).json('Agregaste el juego con exito!!!!!, dirigete al boton "Find" para ver tus juegos creados');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postGame;



