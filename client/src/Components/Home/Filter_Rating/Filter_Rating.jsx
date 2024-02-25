import style from './Filter_Rating.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getRatings } from '../../../Redux/actions';








const Filter_Rating = () => {
  const ratings = useSelector((state) => state.gamesRatings)


  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(getRatings(event.target.value))
  }




  return (

    <div className={style.container}>
      <select className={style.select} defaultValue='All' onChange={handleChange}>
        <option disabled='disabled' value='All'>--- Filtrar Rating ---</option>
          {ratings ? ratings.map((numero) => {
            return (
              <option key={numero} value={numero}>{numero}</option>
            )
          })
          :null}
      </select>
    </div>
  )
}

export default Filter_Rating