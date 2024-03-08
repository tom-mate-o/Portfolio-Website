import React from 'react';
import { useEffect } from 'react';
import aboutBig from '../img/home_item_images/about_big.jpg';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${aboutBig})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Impressum</h1>
        </div>
        <div className="singlepage__content">
          <p>Impressum</p>
        </div>
      </div>
    </div>
  );
}
