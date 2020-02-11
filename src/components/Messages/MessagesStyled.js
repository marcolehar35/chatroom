import styled from 'styled-components';

import theme from 'src/styles/theme';

const MessagesStyled = styled.div`
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar {
    background-color: none;
  }

  .message {
    margin-bottom: 2rem;

    &--own-message {
      text-align: right;
    }
    &--own-message &-body::before {
      right: 24px;
    }

    &-author {
      font-size: .9em;
      margin: 0 1.2rem;
    }

    &-body {
      margin-top: 1em;
      padding: .8em 1.3em;
      color: ${theme.mainColor};
      background-color: #fff;
      border-radius: 1em;
      display: inline-block;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        display: block;
        top: -12px;
        left: 24px;
        /* border-top: 1em solid transparent; */
        /* border-right: 1em solid red; */
        border-bottom: 12px solid #fff;
        border-left: 12px solid transparent;
      }
    }

  }
`;

export default MessagesStyled;
