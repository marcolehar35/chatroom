// Initial State
const initialState = {
  loading: false,
  username: 'Jean',
  // ...
  messages: [
    {
      id: 1,
      content: 'Hey salut Dora',
      author: 'Bob',
    },
    {
      id: 2,
      content: 'Hello',
      author: 'Dora',
    },
    {
      id: 3,
      content: 'La forme ?',
      author: 'Bob',
    },
  ],
  inputMessage: 'depuis le state de redux',
};

// Reducer
const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // entré dans aucune action : je retourne le state sans modif
    default:
      return state;
  }
};

export default chatReducer;
