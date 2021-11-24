import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import TeachableMachine, {
  PredictionError,
} from '@sashido/teachablemachine-node';
import ml5 from 'ml5';

import { BsImage } from 'react-icons/bs';

import { Container, ImageDropZone, PredictionContainer } from './styles';

const modelUrl = 'https://teachablemachine.withgoogle.com/models/h-1kSM8-L/';

const Classifier: React.FC = () => {
  const [model, setModel] = useState<any>();

  const [selectedImage, setSelectedImage] = useState<string>();
  const [prediction, setPrediction] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const imageUrl = URL.createObjectURL(acceptedFiles[0]);
      setSelectedImage(imageUrl);

      try {
        const predictions = await model.classify(imageUrl);

        console.log(predictions);
      } catch (err) {
        console.log((err as any).error);
      }

      setPrediction(true);
    },
    [model],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const initModel = async (): Promise<void> => {
      /* const loadedModel = new TeachableMachine({
        modelUrl: 'https://teachablemachine.withgoogle.com/models/r6BBk-hiN/',
      }); */

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

        {prediction && selectedImage ? (
          <PredictionContainer>
            <img src={selectedImage} alt="Imagem selecionada" />
            <div>
              <p>
                Previsão: <span>Tuberculose</span>
              </p>
              <p>
                Confiança: <span>98.3%</span>
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
