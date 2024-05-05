import styled from 'styled-components';
import { COLOR_PRIMARY } from '../../common/constants';
import '../Menu/Menu.scss';

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;

  .header-btn {
    position: relative;
    height: 100%;
  }

  .ant-btn {
    color: ${COLOR_PRIMARY};
    opacity: 0.71;
    height: 100%;
  }

  .is-active {
    border-top: 4px solid #024fa5;
    color: ${COLOR_PRIMARY};
    opacity: 1;
    font-weight: bold;
  }
`;

export const logoHolder = styled.div`
  height: 100%;
`;
