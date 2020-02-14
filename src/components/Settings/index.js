// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Field from 'src/components/Field';
import SettingsStyled from './SettingsStyled';


// == Composant
const Settings = ({
  emailValue,
  passwordValue,
  changeFieldValue,
  login,
  isOpen,
  toggleSettings,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Si les champs ne sont pas vides, on se connecte
    if (emailValue.length > 0 && passwordValue.length > 0) {
      login();
    }
  };

  return (
    <SettingsStyled className={classNames({
      'settings--open': isOpen,
    })}>
      <div className="toggle-settings" onClick={toggleSettings} />
      <form autoComplete="off" onSubmit={handleSubmit}>
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
};

Settings.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleSettings: PropTypes.func.isRequired,
};

// == Export
export default Settings;
