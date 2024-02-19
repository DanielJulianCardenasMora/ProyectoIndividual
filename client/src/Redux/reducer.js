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
    // case "GUARDAR_JUEGOS":
    //   return {
    //     ...state,
    //     gamesApiShow: action.payload,
    //   }; 
    
    // case FILTER_DB:
    //   const filtered = state.allCharacters.filter(character => character.gender === action.payload)
    //   return {
    //       ...state,
    //       myFavorites: action.payload === 'All' ? state.allCharacters : filtered
    //   }
        
    // case ORDER:
    //   const ordered = state.myFavorites.sort((a, b) => {
    //       if (action.payload === 'A') return a.id - b.id
    //       return b.id - a.id
    //   })
    //   return {
    //       ...state,
    //       myFavorites: [...ordered]
    //   }
  

    default:
        return state
  }
}

export default reducer;