import styled from 'styled-components';

import theme from 'src/styles/theme';

const SettingsStyled = styled.div`
  position: fixed;
  right: 15px;
  top: 5px;
  display: flex;
  align-items: center;
  transition: .6s;
  transform: translateX(245px);
  /* background-color: #fff; */
  form {
    width: 230px;
  }
  .toggle-settings{
    &::before{
      background: white;
      font-family: Arial;
      color: ${theme.mainColor};
      border-radius: 50%;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 28px;
      content: '+';
      font-size: 2em;
      font-weight: 700;
      cursor: pointer;
      display: block;
      transition: .6s;
      margin-right: .3em;
      transform: rotate(0deg);
    }
  }
  &.settings--open{
    transform: translateX(0);
  }
  &.settings--open .toggle-settings{
    &::before{
      color: #ccc;
      transform: rotate(405deg);
    }
  }
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
