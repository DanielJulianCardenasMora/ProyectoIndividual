import style from './Home.module.css'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getDBGames } from '../../Redux/actions';
import { useNavigate } from "react-router-dom";





const Home = ({back}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const getDB = () => {
    dispatch(getDBGames())
  } 
  
  useEffect(() => {
    getDB()
  }, []); 


  return (
    <>
      <div className={style.container}>
        <div className={style.section2}>
          <img className={style.imagen} src={back} />
        </div>
      </div>
    </>
  )
}

export default Home