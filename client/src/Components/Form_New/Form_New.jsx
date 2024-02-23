import style from "./Form_New.module.css";
import { useState } from "react";
import validacion from './validacion'
const URL_SERVER = 'http://localhost:3001/mundoVideoJuegos/'
import axios from 'axios'





const Form_New = () => {
  const [gameData, setGameData] = useState({
    Nombre: '',
    Descripcion: '',
    Imagen: '',
    Plataformas: '',
    Fecha_de_lanzamiento: '',
    Rating: '',
    Generos: ''
  });
  const [errors, setErrors] = useState({});
  const handleChange = (evento) => {
    setErrors(
      validacion({ ...gameData, [evento.target.name]: evento.target.value })
    );
    setGameData({ ...gameData, [evento.target.name]: evento.target.value });
  };

  

  const createGame = async (gameData) => {
    try {
      const { Nombre, Descripcion, Imagen, Plataformas, Fecha_de_lanzamiento, Rating, Generos } = gameData;
      const { data } = await axios
        .post(`${URL_SERVER}videogames/?Nombre=${Nombre}&Descripcion=${Descripcion}&Imagen=${Imagen}&Plataformas=${Plataformas}&Fecha_de_lanzamiento=${Fecha_de_lanzamiento}&Rating=${Rating}&Generos=${Generos}`);
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
          <label htmlFor="Nombre">
            Nombre:
            <input
              className={style.inp}
              type="text"
              placeholder="Your Nombre"
              id="Nombre"
              name="Nombre"
              value={gameData.Nombre}
              onChange={handleChange}
            />
          </label>
          {errors.Nombre && <p className={style.pa}>{errors.Nombre}</p>}



          <label htmlFor="Fecha_de_lanzamiento">
            Fecha de lanzamiento:
            <input
              className={style.inp}
              type="text"
              placeholder="Your Fecha de lanzamiento"
              id="Fecha_de_lanzamiento"
              name="Fecha_de_lanzamiento"
              value={gameData.Fecha_de_lanzamiento}
              onChange={handleChange}
            />
          </label>
          {errors.Fecha_de_lanzamiento && <p>{errors.Fecha_de_lanzamiento}</p>}



          <label htmlFor="Rating">
            Rating:
            <input
              className={style.inp}
              type="text"
              placeholder="Your Rating"
              id="Rating"
              name="Rating"
              value={gameData.Rating}
              onChange={handleChange}
            />
          </label>
          {errors.Rating && <p>{errors.Rating}</p>}



          <label htmlFor="Plataformas">
            Plataformas:
            <input
              className={style.inp}
              type="text"
              placeholder="Your Plataformas"
              id="Plataformas"
              name="Plataformas"
              value={gameData.Plataformas}
              onChange={handleChange}
            />
          </label>
          {errors.Plataformas && <p>{errors.Plataformas}</p>}



          <label htmlFor="Generos">
            Generos:
            <input
              className={style.inp}
              type="text"
              placeholder="Your Generos"
              id="Generos"
              name="Generos"
              value={gameData.Generos}
              onChange={handleChange}
            />
          </label>
          {errors.Generos && <p>{errors.Generos}</p>}



          <label htmlFor="Imagen">
            Imagen:
            <input
              className={style.inp}
              type="text"
              placeholder="Your Imagen"
              id="Imagen"
              name="Imagen"
              value={gameData.Imagen}
              onChange={handleChange}
            />
          </label>
          {errors.Imagen && <p>{errors.Imagen}</p>}



          <label htmlFor="Descripcion">
            Descripcion:
            <input
              className={style.inp}
              type="text"
              placeholder="Your Descripcion"
              id="Descripcion"
              name="Descripcion"
              value={gameData.Descripcion}
              onChange={handleChange}
            />
          </label>
          {errors.Descripcion && <p>{errors.Descripcion}</p>}




          <button className={style.buttonForm}>Crear mi juego</button>
          <h3 className={style.font}>Invitado, con una "x" en ambas casillas</h3>
        </form>
      </div>

    </div>
  );
};

export default Form_New;
