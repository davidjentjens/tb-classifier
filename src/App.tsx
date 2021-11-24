import React from 'react';
import GlobalStyle from './styles/global';

import Classifier from './Classifier';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Classifier />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
