import { ADD_ALL_GAMES, ORDER, FILTER_DB, FILTER_GENRE, GET_GENRE, RATINGS, GET_NAME, SHOW_ALL } from './action-types';





const initialState = {
  gamesApi: [],
  gamesCreated: [],
  gamesGenreDataBase: [],
  gamesRatings: [1,2,3,4,5],
  gamesApiToShow:[]
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_GAMES:
      return {
        ...state,
        gamesApi: action.payload,
        gamesApiToShow: [...action.payload]
      };
  
    
    case GET_GENRE:
      return {
        ...state,
        gamesGenreDataBase: action.payload,
      };
  
    
    case FILTER_GENRE:
      const opcion = action.payload
      const games = state.gamesApi
      const filtrarJuegosPorGenero = (games, opcion) => {
        const juegosPorGenero = games.filter((juego) => {
          const generosJuego = juego.genres.split(", ");
          return generosJuego.some((genero) => genero.toLowerCase().includes(opcion.toLowerCase()));
        });
        return juegosPorGenero;
      };
      const juegosPorGenero = filtrarJuegosPorGenero(games, opcion)
      
      return {
        ...state,
        gamesApi: [...state.gamesApi],
        gamesApiToShow: action.payload === 'All' ? state.gamesApi : juegosPorGenero
      }

    
    case ORDER:
      const ordenados = state.gamesApiToShow.sort((a, b) => {
        if (a.nombre && b.nombre) {
          if (action.payload === "asc") {
            return a.nombre.localeCompare(b.nombre);
          } else {
            return b.nombre.localeCompare(a.nombre);
          }
        } else {
          return 0;
        }
      }
    );
      
      return {
        ...state,
          gamesApiToShow: [...ordenados]
      }
  
    
    case RATINGS:
      const rating = Number(action.payload)
      const gamesToFilterRating = state.gamesApi
      const obtenerObjetos = (gamesToFilterRating, rating) => {
        const juegosFiltrados = gamesToFilterRating.filter((game) => {
          const numeroEntero = Math.round(game.rating);
          return numeroEntero === rating
        }) 
        return juegosFiltrados
      }
      const miRating = obtenerObjetos(gamesToFilterRating, rating);

      return {
        ...state,
          gamesApi: [...state.gamesApi],
          gamesApiToShow: miRating
      }
    
    case SHOW_ALL:
      return {
        ...state,
        gamesApi: [...state.gamesApi],
        gamesApiToShow: state.gamesApi
      }
    
    case GET_NAME:
      return {
        ...state,
        gamesApi: [...state.gamesApi],
        gamesApiToShow: [...action.payload]

      };

    default:
        return state
  }
}

export default reducer;