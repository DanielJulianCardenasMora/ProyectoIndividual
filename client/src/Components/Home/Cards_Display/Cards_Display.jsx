import Card_Single from '../Card_Single/Card_Single'
import style from './Cards_Display.module.css'
import React, { useState, useEffect } from 'react'





const Cards_Display = ({ games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedGames, setSortedGames] = useState([]);
  const itemsPerPage = 15; // Consider user preferences or adjust as needed

  useEffect(() => {
    // Sort games when component mounts or games change
    const sorted = sortGamesByName(games); // Call sort function here
    setSortedGames(sorted);
  }, [games]); // Re-run useEffect when games change

  const startIndex = (currentPage - 1) * itemsPerPage;

  const getVisibleGames = () => {
    // Use sortedGames instead of games
    return sortedGames.slice(startIndex, startIndex + itemsPerPage);
  };

  const visibleGames = getVisibleGames();

  function sortGamesByName(games) {
    // Sort logic here (if not already defined elsewhere)
    const sortedGames = games.slice(); // Clone to avoid modifying original
    sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    return sortedGames;
  }

  return (
    <div className={style.container}>
      {visibleGames.map((game) => (
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
          disabled={currentPage === Math.ceil(sortedGames.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};


export default Cards_Display