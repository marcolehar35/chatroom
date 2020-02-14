// Types
export const CHANGE_MESSAGE_INPUT = 'CHANGE_MESSAGE_INPUT';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const SAVE_USERNAME = 'SAVE_USERNAME';
export const WS_CONNECT = 'WS_CONNECT';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';


// Creators
export const changeMessageInput = (value) => ({
  type: CHANGE_MESSAGE_INPUT,
  value,
});

export const sendNewMessage = () => ({
  type: SEND_NEW_MESSAGE,
});

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUsername = (username) => ({
  type: SAVE_USERNAME,
  username,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message,
});
