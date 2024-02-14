require('dotenv').config();
const axios = require("axios");
const { URL, API_KEY } = process.env;



// entregar los de la db y los de la api
// incluir los datos del genero al q esta asociado en vg/id

const getGameQuery = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      return res.status(404)
        .send('Escoge una palabra clave y ponla en la barra para traerte la maxima informacion')
    } else {
      const {data} = await axios
        .get(`${URL}games${API_KEY}&search=${name}`);
      const juegosCoincidentes = data.results.slice(0, 15)
      const resultados = juegosCoincidentes.map(({ id, name, background_image, background_image_additional, platforms, description, released, rating }) => ({
      // sin el ultimo (
        //   const platformNames = platforms.map(platform => platform.platform.name).join(', ');

      //   return {
      //     id,
      //     name,
      //     background_image,
      //     background_image_additional,
      //     platforms: platformNames, // Concatenated platform names
      //     description,
      //     released,
      //     rating
      //   };
      // });
        id, name, background_image, background_image_additional, platforms, description, released, rating
      }))

      return resultados.length
      ? res.status(200).json(resultados)
      : res.status(404).send("Not found.")
    }
  }
  catch (error) {
    return res.status(404).send(error.message)
  }
}


      

module.exports = getGameQuery;

      // if (!name) {
      //   const allGames = await Game.findAll({
      //     attributes: ['id', 'name', 'released', 'rating']
      //   });
  
      //   return res.status(200).json(allGames)
      // } else {




    // const urlBase = `${URL}games${API_KEY}`
    // let urlPagina = urlBase
    // const siguientePagina = (headers) => {
    //   console.log(headers)
    //   if (headers.next) {
    //     const nextURL = headers.next
    //     return nextURL
    //   } else {

    //     return null
    //   }
        
// }
    


    // while (urlPagina) {
    //   const response = await axios.get(`${urlPagina}`);
    //   // const { results } = data;
    //   const juegosCoincidentes = response.data.results.filter((game) => {
    //     return game.name.toLowerCase().includes(name.toLowerCase())
    //   });
    //   coincidencias.push(juegosCoincidentes)
    //   urlPagina = response.data.next
    //   // console.log(response.data.next)
    // }
    // console.log(juegosCoincidentes)


  
//   const nombresJuegos = juegosCoincidentes.map((juego) => juego.name);
// console.log('Nombres de los juegos filtrados:', nombresJuegos);
    // const coincidencias = juegosCoincidentes.slice(0, 15);
    
    // console.log(juegosCoincidentes)

  // const { id, name, platforms, released, rating} = data;
  // const apiGameByName = { id, name, platforms, released, rating };


  
        // const dbGameByName = await Game.findAll({
      //   where: {
      //     name
      //   }
      // })
      // async function obtenerJuegosPorPalabraClave(palabraClave) {
      //   const url = 'https://api.example.com/juegos'; // Reemplaza con la URL de la API externa
      
      //   try {
      //     const response = await fetch(url);
      //     if (!response.ok) {
      //       throw new Error('Error al obtener datos de la API');
      //     }
      
      //     const data = await response.json();
      //     const juegosCoincidentes = data.filter((juego) =>
      //       juego.nombre.toLowerCase().includes(palabraClave.toLowerCase())
      //     );
      
      //     return juegosCoincidentes.slice(0, 15); // Obtén las primeras 15 coincidencias
      //   } catch (error) {
      //     console.error('Error al realizar la solicitud:', error);
      //     return []; // Maneja el error según tus necesidades
      //   }
      // }
      
      // // Ejemplo de uso
      // const palabraClaveBuscada = 'aventura';
      // const juegosEncontrados = await obtenerJuegosPorPalabraClave(palabraClaveBuscada);
      // console.log('Juegos encontrados:', juegosEncontrados);

  //     return res.status(200).json(coincidencias)
  //   // }
  // } catch (error) {
  //   return res.status(404).send(`No se encontro ningun juego con la palabra ${name}`)
  // }