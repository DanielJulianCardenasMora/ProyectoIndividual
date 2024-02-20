import style from './Filter_Rating.module.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getRatings } from '../../../Redux/actions';








const Filter_Rating = () => {
  const ratings = useSelector((state) => state.gamesRatings)


  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(getRatings(event.target.value))
  }



  return (
    <div>
      Filter_Rating
      <div className={style.container}>
      <div>
        <select options={ratings} className={style.options} defaultValue='All' onChange={handleChange}>
      <option>--- All Ratings ---</option>
          {ratings ? ratings.map((numero) => {
            return (
              <option key={numero} value={numero}>{numero}</option>
            )
          })
          :null}
          

      </select>
    </div>
    </div>




    </div>
  )
}

export default Filter_Rating