import Card_Single from '../Card_Single/Card_Single'
import style from './Cards_Display.module.css'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getApiGames } from '../../../redux1/actions2';




const Cards_Display = ({ games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [juegosEnOrden, setjuegosEnOrden] = useState([]);
  const itemsPerPage = 15; 
  const startIndex = (currentPage - 1) * itemsPerPage;
  
  useEffect(() => {
    const ordenados = ordenarPorNombre(games);
    setjuegosEnOrden(ordenados);
  }, [games]); 
  
  function ordenarPorNombre(games) {
    const juegosEnOrden = games.slice();
    juegosEnOrden.sort((a, b) => a.name.localeCompare(b.name));
    return juegosEnOrden;
  }
  
  const getJuegosVisibles = () => {
    return juegosEnOrden.slice(startIndex, startIndex + itemsPerPage);
  };
  
  const JuegosVisibles = getJuegosVisibles();


  return (
    <div className={style.container}>
      {JuegosVisibles.map((game) => (
        <Card_Single
          key={game.id}
          id={game.id}
          name={game.name}
          background_image={game.background_image}
          genres={game.genres}
          />
      ))}
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(juegosEnOrden.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};


export default Cards_Display