import React from 'react';
import '../styles/index.scss';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__circle"></div>
    </div>
  );
};

export default Loader;