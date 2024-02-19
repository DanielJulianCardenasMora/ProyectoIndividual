import { ADD_ALL_GAMES, ORDER, FILTER_DB, FILTER_GENRE, GET_GENRE, ERROR } from './action-types';



const initialState = {
  gamesApi: [],
  gamesCreated: [],
  gamesGenreDataBase: [],
  gamesGenreFiltered: [],
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
        gamesApi: [...state.gamesApi],
        gamesGenreDataBase: [...state.gamesGenreDataBase],
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
    });
    console.log(ordenados)

      return {
        ...state,
          gamesApiToShow: [...ordenados]
      }
  

    default:
        return state
  }
}

export default reducer;