// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

// == Import
import FormStyled from './FormStyled';

// == Composant
const Form = ({ inputValue }) => {
  const handleChange = (evt) => {
    console.log('Le champ évolue', evt.target.value);
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
};

// == Export
export default Form;
