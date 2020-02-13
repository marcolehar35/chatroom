// Types
export const CHANGE_MESSAGE_INPUT = 'CHANGE_MESSAGE_INPUT';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

// Creators
export const changeMessageInput = (value) => ({
  type: CHANGE_MESSAGE_INPUT,
  value,
});

export const sendNewMessage = () => ({
  type: SEND_NEW_MESSAGE,
});
