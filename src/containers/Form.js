import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { changeMessageInput, sendNewMessage } from 'src/actions/chat';

// == Data / state
const mapStateToProps = (state) => ({
  inputValue: state.inputMessage,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => {
    // Déclencher une action qui sera interceptée par le reducer
    // dispatch({ type: 'CHANGE_MESSAGE_INPUT', value: value });
    dispatch(changeMessageInput(value));
  },
  // propAttendueParLeComposant: fonctionQuiSeraExecutée
  sendMessage: () => {
    const action = sendNewMessage();
    dispatch(action);
  },
});

// connect(redux)(react)
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
