import styled from 'styled-components';

interface LoadingContainerProps {
  containerWidth?: number | string;
  containerHeight?: number | string;
}

export const Container = styled.div<LoadingContainerProps>`
  width: ${(props) => props.containerWidth};
  height: ${(props) => props.containerHeight};

  display: flex;
  justify-content: center;
  align-items: center;
`;
