import style from './Filter_Genre.module.css'
import { useSelector, useDispatch } from "react-redux";
import { filtroDeGenero } from '../../../Redux/actions';







const Filter_Genre = () => {
  const genres = useSelector((state) => state.gamesGenreDataBase)


  const dispatch = useDispatch()
  const handleFilter = (event) => {
    dispatch(filtroDeGenero(event.target.value))
  }

  
  return (
    <div className={style.container}>
      <select className={style.select} defaultValue='All' onChange={handleFilter}>
        <option value='All'>--- Todos los Generos ---</option>
          {genres ? genres.map((option) => {
            return (
              <option key={option.id} value={option.name}>{option.Nombre}</option>
            )
          })
          :null}
      </select>
    </div>
  )
}

export default Filter_Genre