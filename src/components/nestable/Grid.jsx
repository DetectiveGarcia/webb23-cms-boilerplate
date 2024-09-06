import React from 'react';
import RichTextDefault from './RichText';

const Grid = ({ blok }) => {
  return (
    <div className="grid-container">
      {/* Rendera grid med barnkomponenter */}
      <div className="grid">
        {blok.items.map((item) => (
          <div key={item._uid} className="grid-item">
            {/* Rendera barnkomponenterna som t.ex. ImageWithText */}
            {item.component === 'ImageWithText' && (
              <div>
                <img src={item.image.filename} alt={item.title}  className='gridImg' />
                <h3>{item.title}</h3>
                {/* Använd RichTextDefault-komponenten för att rendera text */}
                <RichTextDefault blok={{ richtext: item.text }} />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Grid;
