import { useState, useEffect } from 'react';
import axios from 'axios';
import onSearch from '.';






const useGamesState = () => {
  const [games, setGames] = useState([]);
  const URL = 'http://localhost:3001/mundoVideoJuegos/videogames'

  const onSearch = async () => {
    try {
      const { data } = await axios.get(`${URL}`);
      if (data.length) {
        setGames([data, ...games]);
      } 

    } catch (error) {
      alert(error.message);
    }
  };




  return { games, onSearch };
};


export default onSearch;