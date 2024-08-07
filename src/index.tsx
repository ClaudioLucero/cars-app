import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa el nuevo método
import App from './App';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
