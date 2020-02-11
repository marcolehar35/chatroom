import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/chat';

const store = createStore(
  reducer,
  devToolsEnhancer(),
);

export default store;

/*
Étapes de mise en place
-----------------------
1 - yarn add redux redux-devtools-extension
2 - création du store : createStore
3 - reducer : entonoir (state et action)
4 - je branche le enhancer pour les devtools (extension redux de debug)

*/
