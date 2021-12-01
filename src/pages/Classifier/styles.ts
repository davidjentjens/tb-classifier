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

  > p {
    margin-top: 40px;
    text-align: center;
  }
`;

export const ImageDropZone = styled.div`
  width: 100vh;
  height: 47vh;
  margin: 40px;

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
    margin: 20px 70px;
    text-align: center;
  }

  img {
    width: 200px;
  }
`;

export const PredictionContainer = styled.div`
  margin: 0 30px;
  background: ${lighten(0.1, COLORS.primaryColor)};

  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
