import style from './Card_Single.module.css'
import React from 'react'









const Card_Single = ({ id, name, background_image, genres }) => {
  return (
    <>
      <h2 className={style.title}>{id}</h2>
      <h2 className={style.title}>{name}</h2>
      <h2 className={style.title}>{genres}</h2>

      <img className={style.imagen} src={background_image}/>
    </>
  )
}

export default Card_Single