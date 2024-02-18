import { ADD_ALL_GAMES } from "../Redux/action-types";

const initialState = {
  gamesApi: [],
  gamesCreated: [],
  errors: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_GAMES:
      return {
        ...state,
        gamesApi: action.payload,
      };

    // case FILTER_GENRE:
    //   return {
    //     ...state,
    //     myFavorites: action.payload,
    //     errors: ''
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

    // case ERROR:
    //   return {
    //       ...state,
    //       errors: action.payload
    //   }

    default:
      return state;
  }
};

export default reducer;
