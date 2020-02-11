import styled from 'styled-components';

import theme, { lighten } from 'src/styles/theme';

const FormStyled = styled.form`
  background-color: #fff;
  height: 4rem;
  display: flex;

  .input {
    border: none;
    background: none;
    width: 100%;
    padding: 1em;
    font-size: 1.3em;
  }

  .submit {
    border: none;
    background: none;
    padding: 1em;
    color: ${theme.mainColor};
    width: 5em;
    &:hover {
      background: ${lighten(theme.mainColor, 60)};
    }
  }
`;

export default FormStyled;
