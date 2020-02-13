import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { changeField, login } from 'src/actions/chat';

// == Data / state
const mapStateToProps = (state) => ({
  emailValue: state.email,
  passwordValue: state.password,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => {
    dispatch(changeField(name, value));
  },
  login: () => {
    // eslint-disable-next-line no-console
    console.log('Lancement de la connexion...');
    dispatch(login());
  },
});

// connect(redux)(react)
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
