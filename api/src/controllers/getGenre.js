/*  ===============================================================================================
    ········· Controlador de get para todos los Generos a la api ········· en la ruta /genres.
    ===============================================================================================*/

// https://api.rawg.io/api/genres?key=60168d0ccdc54d229cb076e54698a8fa
// crear las tablas del modelo genre
    
const getGenre = async (req, res) => {
  try {
    let genres = [];
    for (let i = 1; i < 6; i++) {
      const { data } = await axios.get(`${URL}genres${API_KEY}`);
      const resultados = data.results.map(
        ({
          name
        }) => ({
          name
        })
      );
      genres.push(...resultados);
    }

    return res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getGenre;


// where

// const { Favorite } = require('../db');

// const postFav = async (req, res) => {
//   try {
//     // Make the API request (replace with your actual API call)
//     const apiResponse = await fetch('https://your-api-endpoint.com/data');
//     const apiData = await apiResponse.json();

//     // Extract relevant data from the API response
//     const { id, name, origin, status, image, species, gender } = apiData;

//     // Validate if all required data is present
//     if (![id, name, origin, status, image, species, gender].every(Boolean)) {
//       return res.status(401).json({ message: "Faltan datos" });
//     }

//     // Find or create the Favorite record using data from the API
//     const [favorite, created] = await Favorite.findOrCreate({
//       where: {
//         id, // Assuming "id" from the API is unique for each favorite
//       },
//       defaults: {
//         name,
//         origin,
//         status,
//         image,
//         species,
//         gender,
//       },
//     });

//     // Handle create vs. update scenario
//     if (created) {
//       console.log('Favorite created:', favorite);
//     } else {
//       console.log('Favorite updated:', favorite);
//     }

//     // Retrieve all favorites (optional)
//     const allFavorites = await Favorite.findAll();

//     return res.status(200).json({
//       ...favorite.dataValues, // Include the created/updated Favorite data,
//       allFavorites, // Optionally send all favorites if needed
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: error.message });
//   }
// };