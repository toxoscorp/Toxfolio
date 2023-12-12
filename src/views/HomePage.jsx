import React, { useEffect } from 'react';

import './HomePage.css'

const HomePage = () => {

  useEffect(() => {
    const light = document.querySelector('.light');

    window.addEventListener('mousemove', (e) => {
      const x = e.clientX - light.offsetWidth / 2,
            y = e.clientY - light.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px)`
      }

      light.animate(keyframes, { 
        duration: 800, 
        fill: "forwards" 
      });
    });
  }, []);

  return (
    <div className='home'>
        <div className='background'>
          <div className='light'></div>
        </div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a simple React + Vite home page.</p>
    </div>
  );
};

export default HomePage;