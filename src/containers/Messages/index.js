/* eslint-disable arrow-body-style */
// un moyen pour faire le lien
// connect(ion) entre redux et composant de présentation
import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Messages from 'src/components/Messages';

// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// == Data / state
const mapStateToProps = (state) => {
  return {
    list: state.messages,
  };
};

// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
// == Actions / dispatch
const mapDispatchToProps = {};

// création du lien / de la connexion : container
// connect(redux)(react)
// connect(ce dont on a besoin)(qui en a besoin)
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default MessagesContainer;
