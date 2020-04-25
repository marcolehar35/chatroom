import axios from 'axios';

import { LOGIN, saveUsername } from 'src/actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('CONNEXION !!!!!!!');
      const state = store.getState();

      // Je décleche une requete ajax vers mon serveur
      // je vais envoyer des données (email, password)
      axios.post('http://localhost:3001/login', {
        email: state.email,
        password: state.password,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveUsername(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    default:
      // passes au suivant
      next(action);
      break;
  }
};

export default authMiddleware;
