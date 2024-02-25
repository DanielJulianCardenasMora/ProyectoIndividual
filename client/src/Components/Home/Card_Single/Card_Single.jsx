import style from './Card_Single.module.css'
import { Link } from "react-router-dom"









const Card_Single = ({ id, name, background_image, genres, rating }) => {



  return (
    <Link to={`/detail/${id}`} className={style.card}>
      <div className={style.tirdShadow}></div>
      <div className={style.secondShadow}></div>
      <div className={style.firstShadow}></div>
      <div className={style.blue}>
        <div className={style.lightBlue}>
          <img className={style.imagen} alt='Sin imagen principal' src={background_image}/>
        </div>
        <div className={style.pink}>
          {/* <h2 className={style.title}>{id}</h2> */}
          <h2 className={style.title}>{name}</h2>
          <h2 className={style.title}>{genres}</h2>
        <h2 className={style.title}>{rating}{'⭐'}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Card_Single