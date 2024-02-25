import style from "./Form_New.module.css";
import { useEffect, useState } from "react";
import validacion from './validacion'
const URL_SERVER = 'http://localhost:3001/mundoVideoJuegos/'
import axios from 'axios'
import { useSelector } from "react-redux";





const Form_New = () => {
  const genres = useSelector((state) => state.gamesGenreDataBase)


  const [gameData, setGameData] = useState({
    name: '',
    description: '',
    background_image: '',
    platforms: '',
    released: '',
    rating: '',
    Generos: []
  });
  const [errors, setErrors] = useState({});
  const handleChange = (evento) => {
    setErrors(
      validacion({ ...gameData, [evento.target.name]: evento.target.value })
    );
    setGameData({ ...gameData, [evento.target.name]: evento.target.value });
  };
  
  const handleFilter = (event) => {
    setGameData({
      ...gameData,
      Generos: [...gameData.Generos, event.target.value]
    })
  }


  // useEffect(() => {
    
  // }, [gameData.Generos]); 

  const createGame = async (gameData) => {
    try {
      const { name, description, background_image, platforms, released, rating, Generos } = gameData;
      const { data } = await axios
        .post(`${URL_SERVER}videogames/?name=${name}&description=${description}&background_image=${background_image}&platforms=${platforms}&released=${released}&rating=${rating}&Generos=${Generos}`);
      alert(data)
    }
    catch (error) {
      alert(error.response.data.message)
    }
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    createGame(gameData);
  };
  



  return (
    <div className={style.cont}>
      <div className={style.action}>
        <form className={style.formCont} onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nombre:
            <input
              className={style.inp}
              type="text"
              placeholder=""
              id="name"
              name="name"
              value={gameData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p>{errors.name}</p>}



          <label htmlFor="released">
            Fecha de lanzamiento:
            <input
              className={style.inp}
              type="text"
              placeholder="DD / MM / AAAA"
              id="released"
              name="released"
              value={gameData.released}
              onChange={handleChange}
            />
          </label>
          {errors.released && <p>{errors.released}</p>}



          <label htmlFor="rating">
            Rating:
            <input
              className={style.inp}
              type="text"
              placeholder=""
              id="rating"
              name="rating"
              value={gameData.rating}
              onChange={handleChange}
            />
          </label>
          {errors.rating && <p>{errors.rating}</p>}



          <label htmlFor="platforms">
            Plataformas:
            <input
              className={style.inp}
              type="text"
              placeholder=""
              id="platforms"
              name="platforms"
              value={gameData.platforms}
              onChange={handleChange}
            />
          </label>
          {errors.platforms && <p>{errors.platforms}</p>}


          <label htmlFor="Generos">
            Genero:
            <select className={style.select} defaultValue='All' onChange={handleFilter}>
              <option disabled='disabled' value='All'>--- Filtrar Genero ---</option>
                {genres ? genres.map((option) => {
                  return (
                    <option key={option.id} value={option.name}>{option.Nombre}</option>
                  )
                })
                :null}
            </select>
          </label>
          <h3>Seleccionados: {gameData.Generos.join(", ") }</h3>


          {/* <label htmlFor="Generos">
            Generos:
            <input
              className={style.inp}
              type="text"
              placeholder=""
              id="Generos"
              name="Generos"
              value={gameData.Generos}
              onChange={handleChange}
            />
          </label>
          {errors.Generos && <p>{errors.Generos}</p>} */}



          <label htmlFor="background_image">
            Link imagen:
            <input
              className={style.inp}
              type="text"
              placeholder=""
              id="background_image"
              name="background_image"
              value={gameData.background_image}
              onChange={handleChange}
            />
          </label>
          {errors.background_image && <p>{errors.background_image}</p>}



          <label htmlFor="description">
            Description:
            <input
              className={style.inp}
              type="text"
              placeholder=""
              id="description"
              name="description"
              value={gameData.description}
              onChange={handleChange}
            />
          </label>
          {errors.description && <p>{errors.description}</p>}




          <button className={style.buttonForm}>Crear mi juego</button>
          <h3 className={style.font}>Invitado, con una "x" en ambas casillas</h3>
        </form>
      </div>

    </div>
  );
};

export default Form_New;
