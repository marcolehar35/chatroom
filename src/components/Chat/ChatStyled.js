import styled from 'styled-components';

import theme, { lighten } from 'src/styles/theme';

const ChatStyled = styled.div`
  max-width: 700px;
  margin: 0 auto 0 2em;
  background-color: ${lighten(theme.mainColor, 60)};
  height: 100vh;
  box-shadow: 0 0 3em rgba(0, 0, 0, .4);
`;

export default ChatStyled;
