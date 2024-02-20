import style from './Filter_Genre.module.css'
import { useEffect, useState } from 'react'
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
      <div>
        <select options={genres } className={style.options} defaultValue='All' onChange={handleFilter}>
      <option>All</option>
          {genres ? genres.map((option) => {
            return (
              <option key={option.id} value={option.name}>{option.Nombre}</option>
            )
          })
          :null}
          

      </select>
    </div>
    </div>
  )

}

export default Filter_Genre