import Card_Single from '../Card_Single/Card_Single'
import style from './Cards_Display.module.css'
import React from 'react'




const Cards_Display = ({games}) => {

  return (
    <div>
         
      {games.map((game) => (
        <Card_Single
          key={game.id}
          id = { game.id }
          name={game.name}
          background_image={game.background_image}
          genres={game.genres}
        />
      ))}

    </div>
  )
}

export default Cards_Display