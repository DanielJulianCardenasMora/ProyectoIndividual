import { Link } from "react-router-dom"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'








const Detail = () => {
  const [game, setGame] = useState({})  
  const URL = "http://localhost:3001/mundoVideoJuegos/videogames/"
  const { id } = useParams()
  
  useEffect(() => {
    axios.get(`${URL}${id}`)
    .then(({ data }) => setGame(data.name ? data : {}));
    return setGame({});

  }, [id]);
  



  return (
    <div>Detail

      <h1>{ game?.id }</h1>
      <h2>Name:{ game.name }</h2>
      <h2>Descripcion en ingles:{ game.description }</h2>
      <h2>Lanzamiento:{ game.released }</h2>
      <h2>Rating:{ game.rating }</h2>
      <h2>platforms:{ game.platforms }</h2>
      {/* <h2>Origin:{ game.origin?.name }</h2> */}
      <img src={game.background_image} alt={'Imagen principal'}/>
      <img src={game.background_image_additional} alt={'Sin imagen opcional'}/>

    <Link to='/home'>
      <button>Back to Games</button>
    </Link>


    </div>
  )
}

export default Detail