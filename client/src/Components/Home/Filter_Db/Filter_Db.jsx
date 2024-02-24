import style from './Filter_Db.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getOnlyDBGames } from '../../../Redux/actions';









const Filter_Db = () => {
  const gamesDB = useSelector((state) => state.gamesCreated)


  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(getOnlyDBGames(event.target.value))
  }



  return (
    <div>Filter_Db

      <button className={ style.buttonDB } onClick={handleChange}>
          Ver tus juegos creados
        </button>

    </div>
  )
}

export default Filter_Db