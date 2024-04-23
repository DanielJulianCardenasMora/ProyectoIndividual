const axios = require("axios");
// require('dotenv').config()
const { URL, API_KEY } = process.env
const { Genre } = require('../db')



const getGenre = async (req, res) => {
  // try {
  //   let genres = [];
  //     const { data } = await axios.get(`${URL}genres${API_KEY}`);
  //     const resultados = data.results.map(
  //       ({
  //         name
  //       }) => ({
  //         Nombre: name
  //       })
  //   );
    
  //     genres.push(...resultados);

  //   // const crear = await Genre.bulkCreate(genres)
  //   // const allGenres = await Genre.findAll()
    

  //   for (const genreData of genres) {
  //     const genreName = genreData.Nombre;
  
  //     const genre = await Genre.create({
  //       Nombre: genreName,
  //     })
  //   };
    
  //   const allGenres = await Genre.findAll()




  //   return res.status(200).json(allGenres);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }

  try {
    let genres = [];
    const { data } = await axios.get(`${URL}genres${API_KEY}`);
    const resultados = data.results.map(({ name }) => ({ Nombre: name }));
    genres.push(...resultados);

    // Use findOrCreate to efficiently create or find existing genres
    const createdGenres = await Promise.all(
      genres.map(async (genreData) => {
        const { Nombre } = genreData;
        const [genre, created] = await Genre.findOrCreate({
          where: { Nombre },
          defaults: { Nombre },
        });
        return genre;
      })
    );

    // Handle potential errors during findOrCreate (optional, but recommended)
    const creationErrors = createdGenres.filter((genre) => !genre);
    if (creationErrors.length > 0) {
      console.error(
        `Failed to create ${creationErrors.length} genres. Check database logs for details.`
      );
    }

    const allGenres = await Genre.findAll();

    return res.status(200).json(allGenres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = getGenre;

