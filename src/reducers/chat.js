/* eslint-disable no-console */
import { CHANGE_MESSAGE_INPUT } from 'src/actions/chat';

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
  inputMessage: '',
};

// Reducer
const chatReducer = (state = initialState, action = {}) => {
  console.log('chat reducer : ', action);

  switch (action.type) {
    case CHANGE_MESSAGE_INPUT:
      return {
        ...state, // state actuel
        inputMessage: action.value,
      };

    // entré dans aucune action : je retourne le state sans modif
    default:
      return state;
  }
};

export default chatReducer;
