/*  ===============================================================================================
    ········· Controlador de get para todos los Generos a la api ········· en la ruta /genres.
    ===============================================================================================*/

const getGenre = async (req, res) => {
  try {
    let games = [];
    for (let i = 1; i < 6; i++) {
      const { data } = await axios.get(`${URL}games${API_KEY}&page=${i}`);
      const resultados = data.results.map(
        ({
          id,
          name,
          background_image,
          background_image_additional,
          platforms,
          description,
          released,
          rating,
        }) => ({
          id,
          name,
          background_image,
          background_image_additional,
          platforms,
          description,
          released,
          rating,
        })
      );
      games.push(...resultados);
    }

    return res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getGenre;
