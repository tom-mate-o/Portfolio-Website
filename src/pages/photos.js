import React from 'react';
import { useEffect } from 'react';

export default function Photos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Photos</h1>
    </div>
  );
}
