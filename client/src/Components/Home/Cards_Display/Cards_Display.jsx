import Card_Single from '../Card_Single/Card_Single'
import style from './Cards_Display.module.css'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { orderLetter } from '../../../Redux/actions'





const Cards_Display = () => {
  const gamesApiToShow = useSelector((state) => state.gamesApiToShow);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderGames, setOrderGames] = useState([]);
  const [isDescending, setIsDescending] = useState(false);
  const [isAsending, setIsAsending] = useState(false);
  const dispatch = useDispatch()
  const itemsPerPage = 15; 
  const startIndex = (currentPage - 1) * itemsPerPage;


  
  const handleOrderDesc = () => {
    setIsDescending(true)
    setIsAsending(false);
  };
  
  const handleOrder = () => {
    setIsAsending(true)
    setIsDescending(false);
  };


  useEffect(() => {
    const ordenados = ordenarPorNombre(gamesApiToShow);
    setOrderGames(ordenados);
    return () => setCurrentPage(1)
  }, [gamesApiToShow]); 
  
  function ordenarPorNombre(games) {
    const juegosEnOrden = games.slice();
    juegosEnOrden.sort((a, b) => a.name.localeCompare(b.name));
    return juegosEnOrden;
  }
  
  const getJuegosVisibles = () => {
    return orderGames.slice(startIndex, startIndex + itemsPerPage);
  };
  const JuegosVisibles = getJuegosVisibles();

  useEffect(() => {
    if (isDescending) {
      setOrderGames(orderGames.slice().reverse());
    }

  }, [isDescending, isAsending]);
  useEffect(() => {
    if (isAsending) {
      setOrderGames(orderGames.slice().reverse());
    }
    
  }, [isAsending, isDescending]);


  return (
    <div>
      <div className={style.cardsContainer}>
        { JuegosVisibles.map((game) => (
            <Card_Single 
              key={game.id}
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              genres={game.genres}
              rating={game.rating}
          />))}
      </div>
      
      <div className={style.buttonsContainer}>
        <button className={style.buttons1} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <button className={style.buttons2}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(orderGames.length / itemsPerPage)}>
          Siguiente
        </button>
        <button className={style.buttons3} onClick={handleOrder}>
          Asc 
        </button>
        <button className={style.buttons4} onClick={handleOrderDesc}>
          Des 
        </button>
      </div>
    </div>
  );
};


export default Cards_Display



