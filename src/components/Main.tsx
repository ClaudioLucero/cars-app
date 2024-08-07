import React from 'react';
import '../styles/index.scss';

const Main: React.FC = () => {
  return (
    <main className="main">
    {/* Sección 1: Título */}
    <section className="main__title">
      <h1>Descubrí todos los modelos</h1>
    </section>

    {/* Sección 2: Menú en horizontal */}
    <section className="main__menu">
      <div className="main__menu-item">
        <span>Filtrar por</span>
      </div>
      <div className="main__tabs">
        <button className="tab-button">Todos</button>
        <button className="tab-button">Autos</button>
        <button className="tab-button">Pickups y Comerciales</button>
        <button className="tab-button">SUVs Crossovers</button>
      </div>
      <div className="main__sort">
        <span>Ordenar por</span>
      </div>
    </section>

    {/* Sección 3: Cuadrícula de Imágenes */}
    <section className="main__gallery">
      <div className="main__gallery-item"><img src="/images/model1.jpg" alt="Modelo 1" /></div>
      <div className="main__gallery-item"><img src="/images/model2.jpg" alt="Modelo 2" /></div>
      <div className="main__gallery-item"><img src="/images/model3.jpg" alt="Modelo 3" /></div>
      <div className="main__gallery-item"><img src="/images/model4.jpg" alt="Modelo 4" /></div>
      <div className="main__gallery-item"><img src="/images/model5.jpg" alt="Modelo 5" /></div>
      <div className="main__gallery-item"><img src="/images/model6.jpg" alt="Modelo 6" /></div>
      <div className="main__gallery-item"><img src="/images/model7.jpg" alt="Modelo 7" /></div>
      <div className="main__gallery-item"><img src="/images/model8.jpg" alt="Modelo 8" /></div>
      <div className="main__gallery-item"><img src="/images/model9.jpg" alt="Modelo 9" /></div>
    </section>
  </main>
  );
};

export default Main;
