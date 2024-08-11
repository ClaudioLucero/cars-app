import React, { useRef, useState, useEffect } from 'react';
import '../styles/index.scss';
import { CarouselProps } from '../types/CarFeature';

const Carousel: React.FC<CarouselProps> = ({ features }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndicators = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.clientWidth / 4;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth / 4,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth / 4,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => updateIndicators();
    const element = carouselRef.current;
    element?.addEventListener('scroll', handleScroll);

    return () => {
      element?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="carousel">
      <button className="carousel__control prev" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="carousel__inner" ref={carouselRef}>
        {features.map((feature, index) => (
          <div key={index} className="carousel__card">
            <img src={feature.image} alt={feature.name} />
            <div className="carousel__card-info">
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel__control next" onClick={scrollRight}>
        &#10095;
      </button>
      <div className="carousel__indicators">
        {features.map((_, index) => (
          <div
            key={index}
            className={`carousel__indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() =>
              carouselRef.current?.scrollTo({
                left: (index * carouselRef.current.clientWidth) / 4,
                behavior: 'smooth',
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
