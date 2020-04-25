import { WS_CONNECT, SEND_NEW_MESSAGE, saveMessage } from 'src/actions/chat';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      // on veut ouvrir la connexion avec le server WS
      socket = window.io('http://localhost:3001');

      // Si le serveur WS m'envoie un evenement "send_message", je fais un log
      // socket.on() : permet de recevoir des infos
      socket.on('send_message', (info) => {
        store.dispatch(saveMessage(info));
      });
      break;

    case SEND_NEW_MESSAGE: {
      const state = store.getState();
      // Je construis le message
      const newMessage = {
        content: state.inputMessage,
        author: state.username,
      };
      // j'emets le message vers le server de WS
      // socket.emit() : permet d'envoyer des infos
      socket.emit('send_message', newMessage);
      break;
    }

    default:
      break;
  }

  // Passes à ton voisin
  next(action);
};

export default socketMiddleware;
