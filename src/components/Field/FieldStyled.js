import styled from 'styled-components';

import theme from 'src/styles/theme';

const FieldStyled = styled.div`
  margin: 1rem 0;
  position: relative;

  .label {
    display: block;
    position: absolute;
    left: 1rem;
    top: 1.3rem;
    transition: transform .3s;
  }

  .input {
    height: 4rem;
    font-size: 1.2em;
    padding: .8rem 1rem;
    border-radius: .5rem;
    border: 2px solid ${theme.contentColor};
    width: 100%;
    color: ${theme.contentColor};
    &:focus, &:not([value=""]) {
      padding-top: 2rem;
      border-color: ${theme.mainColor};
      & + .label {
        transform: translateY(-1rem);
      }
    }
    
    &:not([value=""]) + .label {
      color: ${theme.mainColor};
    }
  }
`;

export default FieldStyled;
