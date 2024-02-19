import Card_Single from '../Card_Single/Card_Single'
import style from './Cards_Display.module.css'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";





const Cards_Display = ({ games, gamesApiToShow }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderGames, setOrderGames] = useState([]);
  const [showComponent, setShowComponent] = useState(true);

  const itemsPerPage = 15; 
  const startIndex = (currentPage - 1) * itemsPerPage;
  
  useEffect(() => {
    const ordenados = ordenarPorNombre(gamesApiToShow);
    setOrderGames(ordenados);
    return () => {
      // Limpia el estado relacionado con los juegos
      setOrderGames([]);
    };
    
  }, [games]); 
  
  function ordenarPorNombre(games) {
    const juegosEnOrden = games.slice();
    juegosEnOrden.sort((a, b) => a.name.localeCompare(b.name));
    return juegosEnOrden;
  }
  
  const getJuegosVisibles = () => {
    return orderGames.slice(startIndex, startIndex + itemsPerPage);
  };
  
  const JuegosVisibles = getJuegosVisibles();


  return (
    <div className={style.container}>
      {showComponent && (
        <>
        {
        JuegosVisibles.map((game) => (
          
            <Card_Single
              key={game.id}
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              genres={game.genres}
            />
      ))}
          </>
        )}  

      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(orderGames.length / itemsPerPage)}
        >
          Siguiente
        </button>
        <button onClick={() => setShowComponent(!showComponent)}>
          Mostrar/Ocultar contenido
        </button>
      </div>
    </div>
  );
};


export default Cards_Display





// const [gamesApiToShow, setGamesApiToShow] = useState([]);
// const [currentPage, setCurrentPage] = useState(1);
// // const [orderGames, setOrderGames] = useState([]);
// const [showComponent, setShowComponent] = useState(true);

// const itemsPerPage = 15; 
// const startIndex = (currentPage - 1) * itemsPerPage;

// const crearCopiaJuegos = (games) => {
//   const copia = games.slice();
//   return copia;
// };




// useEffect(() => {
//   const juegosCopia = crearCopiaJuegos(games)
//   setGamesApiToShow(juegosCopia)
//   gamesApiToShow.sort((a, b) => a.name.localeCompare(b.name));
  
// }, [games]); 



// const getJuegosVisibles = () => {
//   return gamesApiToShow.slice(startIndex, startIndex + itemsPerPage);
// };

// const JuegosVisibles = getJuegosVisibles();
