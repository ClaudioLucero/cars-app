import React, { useEffect, useState } from 'react';
import '../styles/index.scss';
import Card from './Card';


const Main: React.FC = () => {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    setCars(carsData);
  }, []);
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
      {carsData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            year={item.year}
            price={item.price}
            thumbnail={item.thumbnail}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
const carsData=[
  {
      "id": 1,
      "name": "Corolla",
      "segment": "Sedan",
      "year": 2021,
      "price": 3817000.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/corolla_plata_metalico.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/corolla_plata_metalico.width-600.png"
  },
  {
      "id": 2,
      "name": "Camry",
      "segment": "Sedan",
      "year": 2020,
      "price": 4250400.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/CAMRY-V6_LAT-Negro.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/CAMRY-V6_LAT-Negro.width-600.png"
  },
  {
      "id": 3,
      "name": "Yaris Hatchback",
      "segment": "Hatchback",
      "year": 2021,
      "price": 2585000.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/YarisHB_Rojo_res.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/YarisHB_Rojo_res.width-600.png"
  },
  {
      "id": 4,
      "name": "Etios",
      "segment": "Hatchback",
      "year": 2021,
      "price": 1731000.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/709000-1619455628_320.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/709000-1619455628_320.width-600.png"
  },
  {
      "id": 5,
      "name": "Hilux",
      "segment": "Pickups y Comerciales",
      "year": 2021,
      "price": 3410000.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png"
  },
  {
      "id": 6,
      "name": "Hiace Furgón",
      "segment": "Pickups y Comerciales",
      "year": 2021,
      "price": 3645200.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png"
  },
  {
      "id": 7,
      "name": "Rav4",
      "segment": "SUVs",
      "year": 2021,
      "price": 2960500.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png"
  },
  {
      "id": 8,
      "name": "SW4",
      "segment": "SUVs",
      "year": 2022,
      "price": 6892000.0,
      "thumbnail": "https://challenge.egodesign.dev/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",
      "photo": "https://challenge.egodesign.dev/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"
  }
  ];