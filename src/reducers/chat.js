/* eslint-disable no-console */
import {
  CHANGE_MESSAGE_INPUT,
  CHANGE_FIELD,
  LOGIN,
  SAVE_USERNAME,
  TOGGLE_SETTINGS,
  SAVE_MESSAGE,
} from 'src/actions/chat';

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
  settingsOpen: false,
  email: '',
  password: '',
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

    case SAVE_MESSAGE: {
      return {
        ...state,
        // messages sera un nouveau tableau (immutabilité) avec le contenu de l'ancien
        // + le nouveau message
        messages: [...state.messages, action.message],
        inputMessage: '',
      };
    }

    case CHANGE_FIELD:
      return {
        ...state,
        // On se sert de la valeur stockée dans action.name
        // si action.name vaut email : voila les étapes
        // [action.name]: action.value,
        // ['email']: action.value,
        // 'email': action.value,
        // email: action.value,
        [action.name]: action.value,
      };

    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case SAVE_USERNAME:
      return {
        ...state,
        username: action.username,
        loading: false,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
    // entré dans aucune action : je retourne le state sans modif
    default:
      return state;
  }
};

export default chatReducer;
