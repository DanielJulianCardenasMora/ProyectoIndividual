// import dotenv from 'react-dotenv';
import { ADD_ALL_GAMES, ORDER, FILTER_DB, FILTER_GENRE, GET_GENRE, ERROR } from './action-types'
import axios from 'axios'
// // const { URL, API_KEY } = process.env;
// const URL = process.env
const URL = "https://api.rawg.io/api/"
const API_KEY = "?key=60168d0ccdc54d229cb076e54698a8fa"
const URL_SERVER = 'http://localhost:3001/mundoVideoJuegos/'




export const getApiGames = () => {
  return async (dispatch) => {
    try {
      const games = [];
      for (let i = 1; i < 6; i++) {
        const { data } = await axios
        .get(`${URL}games${API_KEY}&page=${i}`);
        const resultados = data.results.map(({ id, name, background_image, genres}) => {
          const genresGame = genres.map(genre => genre.name).join(', ');
          
          return {
            id,
            name,
            background_image,
            genres: genresGame, 
          };
        });
  
        games.push(...resultados)
      }

      return dispatch({
        type: ADD_ALL_GAMES,
        payload: games,
      });
    }
    catch (error) {
      alert(error.message);
      // return dispatch({
      //   type: ERROR,
      //   payload: error.message,
      // });
    }
  };
};


export const getDataBaseGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios
        .get(`${URL_SERVER}allGenres`);

      return dispatch({
        type: GET_GENRE,
        payload: data,
      });
    }
    catch (error) {
      alert(error.message);
    }
  }  
};


export const filtroDeGenero = (genero) => {
  return {
    type: FILTER_GENRE,
    payload: genero
  }
}

export const orderLetter = (orden) => {
  return {
    type:ORDER,
    payload: orden
  } 
}