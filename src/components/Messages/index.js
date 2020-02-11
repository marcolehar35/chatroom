// == Import npm
import React from 'react';

// == Import
import MessageDetail from 'src/components/Messages/MessageDetail';
import MessagesStyled from './MessagesStyled';

// == Composant
const Messages = () => (
  <MessagesStyled>
    <MessageDetail />
    <MessageDetail />
    <MessageDetail />
  </MessagesStyled>
);

// == Export
export default Messages;
