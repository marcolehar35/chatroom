// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Field from 'src/components/Field';
import SettingsStyled from './SettingsStyled';


// == Composant
const Settings = ({ emailValue, passwordValue, changeFieldValue }) => (
  <SettingsStyled>
    <form autoComplete="off">
      <Field
        name="email"
        value={emailValue}
        placeholder="Votre email"
        changeValue={changeFieldValue}
      />
      <Field
        name="password"
        value={passwordValue}
        placeholder="Votre mot de passe"
        changeValue={changeFieldValue}
        type="password"
      />
      <button className="submit" type="submit">Se connecter</button>
    </form>

  </SettingsStyled>
);

Settings.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
};

// == Export
export default Settings;
