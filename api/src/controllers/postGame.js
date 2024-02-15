/*  ===============================================================================================
    ········· Controlador para hacer post de un VideoJuego ········· en la ruta /videogames.
    ===============================================================================================*/
 
const postGame = async (req, res) => {
  try {
    const { nombre, imagen, descripcion, plataformas, fecha_de_lanzamiento, rating, generos } = req.body;

    if (!nombre)
      return res.status(400).json({ message: "Es necesario agregar un nombre" });

      const user = await Gamex.findOrCreate({
        where: {
            nombre,
            imagen,
            descripcion,
            plataformas,
            fecha_de_lanzamiento,
            rating,
            generos
        }
      });

    res.status(200).json('Agregaste el juego con exito!!!!!, dirigete al boton "Find" para ver tus juegos creados');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postGame;

// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego.

