import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1.75 : 100));
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src="/images/Logo.png" alt="Damen Logo" className="logo" />
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Loading;
