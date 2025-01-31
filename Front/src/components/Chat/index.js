// == Import npm
import React from 'react';

// == Import
import Settings from 'src/containers/Settings';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';

import GlobalStyles from 'src/styles/GlobalStyles';
import ChatStyled from './ChatStyled';

// == Composant
const Chat = () => (
  <ChatStyled>
    <GlobalStyles />
    <Settings />
    <Messages />
    <Form />
  </ChatStyled>
);

// == Export
export default Chat;
