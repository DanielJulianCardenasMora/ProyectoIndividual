

export const getApiGames = () => {
   

  return {
    type: ADD_ALL_GAMES,
    payload: [1,2,3]
  }
       

};

// export const addFav = (character) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(ENDPOINT, character);
//       return dispatch({
//         type: "ADD_FAV",
//         payload: data,
//       });
//     } catch (error) {
//       alert(error.message);
//       return dispatch({
//         type: "ERROR",
//         payload: error.message,
//       });
//     }
//   };
// };
