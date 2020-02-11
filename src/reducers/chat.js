// Initial State
const initialState = {};

// Reducer
const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // entré dans aucune action : je retourne le state sans modif
    default:
      return state;
  }
};

export default chatReducer;
