import React from 'react';
import GlobalStyle from './styles/global';

import Classifier from './pages/Classifier';
import Footer from './components/Footer';

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
