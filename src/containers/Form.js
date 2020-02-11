import { connect } from 'react-redux';

import Form from 'src/components/Form';

// == Data / state
const mapStateToProps = (state) => ({
  inputValue: state.inputMessage,
});

// == Actions / dispatch
const mapDispatchToProps = {};

// connect(redux)(react)
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
