import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CarDetails from './components/CardDetails'; 
import './styles/index.scss'; // Importa los estilos globales

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Navigate to="/" />} /> {/* Redirige /home a / */}
          <Route path="/car/:id" element={<CarDetails />} /> {/* Ruta para los detalles del auto */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
