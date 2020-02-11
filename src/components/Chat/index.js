// == Import npm
import React from 'react';

// == Import
import Settings from 'src/components/Settings';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

import GlobalStyles from 'src/styles/GlobalStyles';
import ChatStyled from './ChatStyled';

const messages = [
  {
    id: 1,
    content: 'Hey salut',
    author: 'Bob',
  },
  {
    id: 2,
    content: 'Hello',
    author: 'Dora',
  },
  {
    id: 3,
    content: 'La forme ?',
    author: 'Bob',
  },
];

// == Composant
const Chat = () => (
  <ChatStyled>
    <GlobalStyles />
    <Settings />
    <Messages list={messages} />
    <Form />
  </ChatStyled>
);

// == Export
export default Chat;
