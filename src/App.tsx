import React from 'react';
import GlobalStyle from './styles/global';

import Classifier from './Classifier';

const App: React.FC = () => {
  return (
    <div className="App">
      <Classifier />
      <GlobalStyle />
    </div>
  );
};

export default App;
