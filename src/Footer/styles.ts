import styled from 'styled-components';
import { lighten } from 'polished';

import COLORS from '../styles/colors';

export const Container = styled.footer`
  height: 70px;
  padding: 0 40vh;

  background: ${lighten(0.1, COLORS.primaryColor)};
  color: #fff;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 100px;
  }

  p {
    width: 550px;
    font-size: 14px;
    text-align: center;
  }
`;
