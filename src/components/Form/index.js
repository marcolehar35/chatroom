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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Soumission du formulaire');

    // ACTIONS
    // Intention : nouvelle action => SEND_MESSAGE
    // action creator
    //
    // REDUCER
    // case dans le reducer pour gérer l'action
    // recup les data du state : valeur du champ et les messages
    // impacter le state :
    //   - insérer le nouveau message dans la liste des messages
    //   - reset du champ
    //
    // CONTAINER
    // Préparer une prop pour le composant Form
    // dispatch de l'action lors de la soumission du form
    //
    // ----------------------
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
};

// == Export
export default Form;
