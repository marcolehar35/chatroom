// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// == Import
import MessageDetail from 'src/containers/Messages/MessageDetail';
import MessagesStyled from './MessagesStyled';

// == Composant
const Messages = ({ list }) => {
  // je déclare la future ref à null : au départ l'élément n'existe pas
  const messagesContainer = useRef(null);
  // Déclencher une fonction lors de la mise à jour de la prop list
  useEffect(() => {
    // messagesContainer.current === l'élément du DOM ici la div des messages
    // scrollTo(X, Y)
    messagesContainer.current.scrollTo(0, messagesContainer.current.scrollHeight);
  }, [list]);

  return (
    // ref => donne la reference vers l'élément du DOM généré
    // c'est react-dom qui me transmet la référence
    <MessagesStyled ref={messagesContainer}>
      {list.map((message) => (
        <MessageDetail key={message.id} {...message} />
      ))}
    </MessagesStyled>
  );
};

Messages.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Messages;
