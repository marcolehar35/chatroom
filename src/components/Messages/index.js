// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import MessageDetail from 'src/components/Messages/MessageDetail';
import MessagesStyled from './MessagesStyled';

// == Composant
const Messages = ({ list }) => (
  <MessagesStyled>
    {list.map((message) => (
      <MessageDetail key={message.id} {...message} />
    ))}
  </MessagesStyled>
);

Messages.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Messages;
