import styled from 'styled-components';

import theme from 'src/styles/theme';

const SettingsStyled = styled.div`
  position: fixed;
  right: 1em;
  top: 1em;
  border-radius: 5px;
  padding: .7em;
  background-color: #fff;
  .submit {
    background-color: ${theme.mainColor};
    border-radius: 10px;
    border: none;
    color: #fff;
    padding: .8em;
    font-weight: 700;
    width: 100%;
  }
`;

export default SettingsStyled;
