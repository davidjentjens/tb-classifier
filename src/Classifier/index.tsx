/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ml5 from 'ml5';

import { BsImage } from 'react-icons/bs';

import { Container, ImageDropZone, PredictionContainer } from './styles';

interface ModelPrediction {
  label: string;
  confidence: number;
}

const Classifier: React.FC = () => {
  const [model, setModel] = useState<any>();

  const [selectedImage, setSelectedImage] = useState<HTMLImageElement>();
  const [predictions, setPredictions] = useState<ModelPrediction[]>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const image = new Image();
      image.src = URL.createObjectURL(acceptedFiles[0]);

      setSelectedImage(image);

      if (!image) {
        return;
      }

      image.onload = async () => {
        const modelPredictions = await model.classify(image);
        setPredictions(modelPredictions);
      };
    },
    [model],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const initModel = async (): Promise<void> => {
      const loadedModel = await ml5.imageClassifier('./model/model.json');
      setModel(loadedModel);
    };

    initModel();
  }, []);

  return (
    <Container>
      <h2>⚕️ Detector de Tuberculose 🩺</h2>
      <p>
        Seja bem-vindo ao detector de tuberculose. Selecione uma imagem de um
        Raio X e coloque-à no campo abaixo para receber uma classificação.
      </p>
      <ImageDropZone {...getRootProps()}>
        <input {...getInputProps()} />

        {predictions && selectedImage ? (
          <PredictionContainer>
            <img src={selectedImage.src} alt="Imagem selecionada" />
            <div>
              <p>
                Previsão: <span>{predictions[0].label}</span>
              </p>
              <p>
                Confiança:{' '}
                <span>{(predictions[0].confidence * 100).toFixed(2)}%</span>
              </p>
            </div>
          </PredictionContainer>
        ) : isDragActive ? (
          <>
            <BsImage size={48} />
            <p>Arraste a imagem aqui ...</p>
          </>
        ) : (
          <>
            <BsImage size={48} />
            <p>
              Arraste e solte o arquivo aqui, ou clique para selecionar o
              arquivo ...
            </p>
          </>
        )}
      </ImageDropZone>
    </Container>
  );
};

export default Classifier;
