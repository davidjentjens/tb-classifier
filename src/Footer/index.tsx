import React from 'react';

import logoPUC from '../assets/logoPUC.png';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={logoPUC} alt="Logo PUC-Rio" />
      <p>
        Desenvolvido por David M. Jentjens, para fins de trabalho de conclusão
        da disciplina Visão Computacional da PUC-Rio, com o professor Marcelo
        Gattass.
      </p>
    </Container>
  );
};

export default Footer;
