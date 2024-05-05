import styled from 'styled-components';
import './Menu.scss';

export const StyledMenu = styled.div`
  .ant-btn {
    width: 100%;
    text-align: left;
    height: 48px;

    a {
      margin-left: 16px;
    }
  }

  .is-active {
    background-color: rgb(81, 149, 238);
    color: white;
  }
`;
