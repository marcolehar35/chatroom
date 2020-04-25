import { createGlobalStyle } from 'styled-components';

import theme, { darken } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${darken(theme.mainColor, 10)};
  }

  @keyframes grow {
    0% {
      transform: scale(.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default GlobalStyles;
