// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import Chat from 'src/components/Chat';
import store from 'src/store';

// action creator pour la connexion au WebSocket
import { wsConnect } from 'src/actions/chat';
// dispactch la volonté de connecter le WebSocket
store.dispatch(wsConnect());

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Chat />
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
