import style from './Search_Name.module.css'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { pedirNombre, getALL } from '../../../Redux/actions';









const Search_Name = () => {
  const [nombre, setNombre] = useState("");
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(pedirNombre(nombre));
  };

  const handleSubmitAll = () => {
    dispatch(getALL());
  };



  return (
      <div className={style.container}>
        <div className={style.container2}>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='nombre'
              value={nombre}
              onChange={handleInputChange}
              placeholder='Palabra clave de nombre'
              />
            <button type='submit'>Buscar</button>
          </form>
        </div>

      <button className={style.vertodos} onClick={handleSubmitAll} type='submit'>Ver todos</button>
    </div>
  )
}




export default Search_Name