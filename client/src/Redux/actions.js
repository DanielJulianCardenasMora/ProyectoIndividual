// import dotenv from 'react-dotenv';
import { ADD_ALL_GAMES, ORDER, FILTER_DB, FILTER_GENRE, GET_GENRE, RATINGS, GET_NAME, SHOW_ALL, SHOW_DB } from './action-types'
import axios from 'axios'
// // const { URL, API_KEY } = process.env;
// const URL = process.env
const URL_SERVER = 'http://localhost:3001/mundoVideoJuegos/'




export const getApiGames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios
        .get(`${URL_SERVER}videogames`);
      
      return dispatch({
        type: ADD_ALL_GAMES,
        payload: data,
      });
    }
    catch (error) {
      alert(error.message);
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
    type: ORDER,
    payload: orden
  } 
}

export const getRatings = (numero) => {
  return {
    type: RATINGS,
    payload: numero
  } 
}

export const getALL = () => {
  return {
    type: SHOW_ALL,
  } 
}

export const pedirNombre = (nombre) => {
  return async (dispatch) => {
    try {
      const nombreMinuscula = nombre.toLowerCase();
      const { data } = await axios
        .get(`${URL_SERVER}videogames/name?name=${nombreMinuscula}`);
      
      return dispatch({
        type: GET_NAME,
        payload: data,
      });
    }
    catch (error) {
      alert(error.message);
    }
  }
}

export const getDBGames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios
        .get(`${URL_SERVER}allDBgames`);

      return dispatch({
        type: FILTER_DB,
        payload: data,
      });
    }
    catch (error) {
      alert(error.message);
    }
  }  
};

export const getOnlyDBGames = () => {
  return {
    type: SHOW_DB,
  } 
}

