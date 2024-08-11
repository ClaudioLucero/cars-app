import React from 'react';
import { CarHighlight } from '../types/carDetail';
import '../styles/index.scss';

interface HighlightProps {
  highlights: CarHighlight[];
}

const Highlight: React.FC<HighlightProps> = ({ highlights }) => {
    if (!highlights || highlights.length < 2) return null;
  
    return (
      <div className="highlight">
        <div className="highlight__row">
          <div className="highlight__column">
            <h3>{highlights[0].title}</h3>
            <div className="highlight__content" dangerouslySetInnerHTML={{ __html: highlights[0].content }} />
          </div>
          <div className="highlight__column">
            <img src={highlights[0].image} alt={highlights[0].title} />
          </div>
        </div>
        <div className="highlight__row">
          <div className="highlight__column">
            <img src={highlights[1].image} alt={highlights[1].title} />
          </div>
          <div className="highlight__column">
            <h3>{highlights[1].title}</h3>
            <div className="highlight__content" dangerouslySetInnerHTML={{ __html: highlights[1].content }} />
          </div>
        </div>
      </div>
    );
  };
  
export default Highlight;
