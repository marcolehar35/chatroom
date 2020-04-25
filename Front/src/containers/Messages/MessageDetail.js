/* eslint-disable arrow-body-style */
// un moyen pour faire le lien
// connect(ion) entre redux et composant de présentation
import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import MessageDetail from 'src/components/Messages/MessageDetail';

// == Data / state
const mapStateToProps = (state, ownProps) => ({
  ownMessage: ownProps.author === state.username,
});

// == Actions / dispatch
const mapDispatchToProps = {};

// création du lien / de la connexion : container
const MessageDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageDetail);

export default MessageDetailContainer;
