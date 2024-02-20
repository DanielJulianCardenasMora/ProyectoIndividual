import style from './Card_Single.module.css'
import React from 'react'









const Card_Single = ({ id, name, background_image, genres, rating }) => {
  return (

      <div className={style.card}>
        <div className={style.tirdShadow}></div>
        <div className={style.secondShadow}></div>
        <div className={style.firstShadow}></div>
        <div className={style.blue}>
          <div className={style.lightBlue}>
            <img className={style.imagen} src={background_image}/>
          </div>
          <div className={style.pink}>
            {/* <h2 className={style.title}>{id}</h2> */}
            <h2 className={style.title}>{name}</h2>
            <h2 className={style.title}>{genres}</h2>
            <h2 className={style.title}>{rating}</h2>
          </div>
        </div>
      </div>

  )
}

export default Card_Single