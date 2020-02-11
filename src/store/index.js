import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/chat';

const store = createStore(
  reducer,
  devToolsEnhancer(),
);

export default store;

/*
Redux : Étapes de mise en place
-----------------------
1 - yarn add redux redux-devtools-extension
2 - création du store : createStore
3 - reducer : entonoir (state et action)
4 - je branche le enhancer pour les devtools (extension redux de debug)
5 - je renseigne mon initialState dans le reducer

React + Redux
-------------
1 - yarn add react-redux
2 - via react-redux diffusé le store autour de l'appli react : Provider
3 - container : faire le lien entre
  - le state géré par redux et
  - les composants qui ont besoin des infos de ce state

*/
