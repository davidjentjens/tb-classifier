import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Container, ImageDropZone } from './styles';

const Classifier: React.FC = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container>
      <h1>Detector de Tuberculose</h1>
      <ImageDropZone {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </ImageDropZone>
    </Container>
  );
};

export default Classifier;
