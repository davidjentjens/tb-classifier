import styled from 'styled-components';
import COLORS from '../styles/colors';

export const Container = styled.div`
  background: ${COLORS.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageDropZone = styled.div`
  background: ${COLORS.primaryColor};
`;
