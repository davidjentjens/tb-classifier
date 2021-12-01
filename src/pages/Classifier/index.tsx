/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ml5 from 'ml5';

import { BsImage } from 'react-icons/bs';

import LoadingContainer from '../../components/LoadingContainer';

import { Container, ImageDropZone, PredictionContainer } from './styles';

interface ModelPrediction {
  label: string;
  confidence: number;
}

const Classifier: React.FC = () => {
  const [model, setModel] = useState<any>();

  const [modelIsLoading, setModelIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState<HTMLImageElement>();
  const [predictions, setPredictions] = useState<ModelPrediction[]>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (modelIsLoading) {
        return;
      }

      const image = new Image();
      image.src = URL.createObjectURL(acceptedFiles[0]);

      if (!image) {
        return;
      }

      setIsLoading(true);
      setSelectedImage(image);

      image.onload = async () => {
        const modelPredictions = await model.classify(image);
        setPredictions(modelPredictions);

        setIsLoading(false);
      };
    },
    [modelIsLoading, model],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const initModel = async (): Promise<void> => {
      setModelIsLoading(true);

      const loadedModel = await ml5.imageClassifier('./model/model.json');
      setModel(loadedModel);

      setModelIsLoading(false);
    };

    initModel();
  }, []);

  return (
    <Container>
      <h2>⚕️ Tuberculosis Detector 🩺</h2>
      <p>
        Welcome to the tuberculosis detector web app. Select an X-Ray image and
        place it in the field below to receive a prediction.
        <b>
          DISCLAIMER: This project is not meant to be used for medical purposes.
          It is for academical purposes only.
        </b>
      </p>

      <ImageDropZone {...getRootProps()}>
        <input {...getInputProps()} />

        {modelIsLoading ? (
          <>
            <LoadingContainer loaderSize={72} containerHeight="100px" />
            <p>The prediction model is loading, please wait...</p>
          </>
        ) : isLoading ? (
          <>
            <LoadingContainer loaderSize={72} containerHeight="100px" />
            <p>Inference in progress, please wait...</p>
          </>
        ) : predictions && selectedImage ? (
          <PredictionContainer>
            <img src={selectedImage.src} alt="Selected X-Ray" />
            <div>
              <p>
                Prediction: <span>{predictions[0].label}</span>
              </p>
              <p>
                Confidence:{' '}
                <span>{(predictions[0].confidence * 100).toFixed(2)}%</span>
              </p>
            </div>
          </PredictionContainer>
        ) : isDragActive ? (
          <>
            <BsImage size={48} />
            <p>Drag the image here...</p>
          </>
        ) : (
          <>
            <BsImage size={48} />
            <p>Drag and drop the file here, or click to select the file...</p>
          </>
        )}
      </ImageDropZone>
    </Container>
  );
};

export default Classifier;
