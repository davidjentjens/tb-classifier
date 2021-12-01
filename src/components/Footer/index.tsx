import React from 'react';

import logoPUC from '../../assets/logoPUC.png';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={logoPUC} alt="Logo PUC-Rio" />
      <p>
        Developed by David M. Jentjens, for the Computer Vision course at
        PUC-Rio, under the supervision of professor Marcelo Gattass.
      </p>
    </Container>
  );
};

export default Footer;
