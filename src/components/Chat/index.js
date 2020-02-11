// == Import npm
import React from 'react';

// == Import
import Settings from 'src/components/Settings';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

// == Composant
const Chat = () => (
  <div>
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chat;
