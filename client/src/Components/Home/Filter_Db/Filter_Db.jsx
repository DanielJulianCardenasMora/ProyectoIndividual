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
    <div className={ style.container }>
      <button className={ style.buttonDB } onClick={handleChange}>
          Created
        </button>
    </div>
  )
}

export default Filter_Db