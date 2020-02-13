/* eslint-disable no-console */
const loggerMiddleware = (store) => (next) => (action) => {
  console.log(store, action);

  // Passes à ton voisin
  next(action);
};

export default loggerMiddleware;
