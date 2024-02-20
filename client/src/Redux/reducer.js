import { ADD_ALL_GAMES, ORDER, FILTER_DB, FILTER_GENRE, GET_GENRE, RATINGS } from './action-types';





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
        gamesApiToShow: juegosPorGenero
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
      const juegosPorRating = state.gamesApi.filter(game => game.rating === action.payload);

      return {
        ...state,
          gamesApi: [...state.gamesApi],
          gamesApiToShow: [...juegosPorRating]
      }

    default:
        return state
  }
}

export default reducer;