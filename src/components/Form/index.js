// == Import npm
import React from 'react';
import { Send } from 'react-feather';

// == Import
import FormStyled from './FormStyled';

// == Composant
const Form = () => (
  <FormStyled>
    <input
      type="text"
      placeholder="Votre message"
      className="input"
    />
    <button type="submit" className="submit">
      <Send size="100%" />
    </button>
  </FormStyled>
);

// == Export
export default Form;
