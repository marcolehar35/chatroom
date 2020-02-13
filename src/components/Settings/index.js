// == Import npm
import React from 'react';

// == Import
import Field from 'src/components/Field';
import SettingsStyled from './SettingsStyled';


// == Composant
const Settings = () => (
  <SettingsStyled>
    <form autoComplete="off">
      <Field
        name="email"
        placeholder="Votre email"
        changeValue={() => { }}
      />
      <Field
        name="password"
        placeholder="Votre mot de passe"
        changeValue={() => { }}
        type="password"
      />
      <button className="submit" type="submit">Se connecter</button>
    </form>

  </SettingsStyled>
);

// == Export
export default Settings;
