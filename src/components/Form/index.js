// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

// == Import
import FormStyled from './FormStyled';

// == Composant
const Form = ({ inputValue, changeInputValue }) => {
  const handleChange = (evt) => {
    changeInputValue(evt.target.value);
  };

  return (
    <FormStyled>
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
};

// == Export
export default Form;
