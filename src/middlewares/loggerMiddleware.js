// Middleware === asynchrone. c'est tout
/* eslint-disable no-console */
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('MIDDLEWARE logger : ', store, action);

  // Passes à ton voisin
  next(action);
};

export default loggerMiddleware;
