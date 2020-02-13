// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

// == Import
import FormStyled from './FormStyled';

// == Composant
const Form = ({ inputValue, changeInputValue, sendMessage }) => {
  const handleChange = (evt) => {
    changeInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Soumission du formulaire');
    // La prop venant du container (action qui sera dispatchée)
    sendMessage();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Votre message"
        className="input"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="submit">
        <Send size="100%" />
      </button>
    </FormStyled>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

// == Export
export default Form;
