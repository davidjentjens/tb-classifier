/* eslint-disable react/require-default-props */
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Container } from './styles';

interface LoadingContainerProps {
  loaderSize?: number | string;
  containerWidth?: number | string;
  containerHeight?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({
  loaderSize = '150px',
  color = '#296BB2',
  containerWidth = 'auto',
  containerHeight = '500px',
  style,
}) => {
  return (
    <Container
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      style={style}
    >
      <ClipLoader size={loaderSize} color={color} />
    </Container>
  );
};

export default LoadingContainer;
