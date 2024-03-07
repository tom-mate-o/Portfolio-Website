import React from 'react';
import { useEffect } from 'react';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Impressum</h1>
    </div>
  );
}
