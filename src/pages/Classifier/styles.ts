import { darken, lighten } from 'polished';

import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 50vh;

  background: ${COLORS.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 3.5vh;
  }

  > p {
    font-size: 2.4vh;
    margin-top: 40px;
    text-align: center;
  }
`;

export const ImageDropZone = styled.div`
  width: 100vh;
  height: 47vh;
  margin: 6vh;

  border-radius: 5px;
  color: #fff;
  background: ${darken(0.06, COLORS.secondaryColor)};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    outline: 3px solid ${COLORS.secondaryColor};
  }

  p {
    font-size: 3.4vh;
    margin: 20px 70px;
    text-align: center;
  }
`;

export const PredictionContainer = styled.div`
  margin: 0 30px;

  border-radius: 10px;
  background: ${lighten(0.15, COLORS.primaryColor)};

  display: flex;

  img {
    height: 38vh;
    border-radius: 10px 0 0 10px;
  }
`;

export const PredictionInfo = styled.div`
  border: 5px solid ${lighten(0.35, COLORS.primaryColor)};
  border-radius: 0 10px 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: ${darken(0.6, '#fff')};
    font-size: 3.4vh;
  }

  span {
    color: ${darken(0.15, '#296bb2')};
  }
`;
