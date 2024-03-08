import React from 'react';
import { useEffect } from 'react';
import projectsBig from '../img/home_item_images/projects_big.jpg';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${projectsBig})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Projects</h1>
        </div>
        <div className="singlepage__content">
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
