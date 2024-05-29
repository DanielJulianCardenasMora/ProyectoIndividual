import { Link } from "react-router-dom"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './Detail.module.css'
import arrow from '../../z_imagesFonts/Images/arrow-gaming.jpg'







const Detail = () => {
  const [game, setGame] = useState({})  
  const URL = "http://localhost:3001/mundoVideoJuegos/videogames/"
  const { id } = useParams()

  useEffect(() => {
    const getResult = async () => {
      try {
        const { data } = await axios.get(`${URL}${id}`);
    
        if (data?.description) {
          const formattedDescription = data.description
            .replace(/<br \/>/g, '\n')
            .replace(/<[^>]+>/g, '');
          setGame({ ...data, description: formattedDescription });
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getResult();
  
  }, [id]);
  


  return (
    <div className={style.bg}>

      <img className={style.bgimage} src={arrow} alt={'Imagen principal'}/>
      <div className={style.container}>

      <img className={style.obj} src={game.background_image} alt={'Main Image'}/>
      <img className={style.obj2} src={game.background_image_additional} alt={'No optional image'}/>
      <h1 className={style.obj3}>API ID: { game?.id }</h1>
      <h2 className={style.obj4}>{ game.name }</h2>
      <h2 className={style.obj5}>Description: { game.description }</h2>
      <h2 className={style.obj6}>Released: { game.released }</h2>
      <h2 className={style.obj7}>Rating: { game.rating }</h2>
      <h2 className={style.obj8}>Platforms: { game.platforms }</h2>
      <h2 className={style.obj8}>Genres: { game.genres }</h2>
    



      </div>
    <Link to='/home'>
      <button className={style.button}>Back to Games</button>
    </Link>
   
      </div>
      
  )
}

export default Detail