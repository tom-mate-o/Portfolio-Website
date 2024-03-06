import React from 'react';
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}
