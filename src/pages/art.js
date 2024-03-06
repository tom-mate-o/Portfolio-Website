import React from 'react';
import { useEffect } from 'react';

export default function Art() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Art</h1>
    </div>
  );
}
