import style from './Card_Single.module.css'
import { Link } from "react-router-dom"








const Card_Single = ({ id, name, background_image, genres, rating }) => {
  return (
    <Link to={`/detail/${id}`} className={style.card}>
      <div className={style.secondShadow}></div>
      <div className={style.firstShadow}></div>
      <div className={style.blue}>
        <img className={style.imagen} alt='Sin imagen principal' src={background_image}/>
        <div className={style.pink}>
          <h2 className={style.title1}>{name}</h2>
          <h2 className={style.title2}>{genres}</h2>
          <h2 className={style.title3}>{rating}{'⭐'}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Card_Single