// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import

// == Composant
const MessageDetail = ({ author, content, ownMessage }) => {
  const cssClassNames = classNames({
    message: true,
    'message--own-message': ownMessage,
  });

  return (
    <div className={cssClassNames}>
      <div className="message-author">{author}</div>
      <div className="message-body">{content}</div>
    </div>
  );
};

MessageDetail.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  ownMessage: PropTypes.bool,
};

MessageDetail.defaultProps = {
  ownMessage: false,
};

// == Export
export default MessageDetail;
