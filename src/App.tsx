import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './styles/index.scss'; // Importa los estilos globales

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
