import { useState, useEffect } from 'react';
import videoSource from "../../assets/Rise.mp4";
import './PreLoader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoading ? 'visible' : 'hidden'}`}>
      {isLoading && (
        <video
          autoPlay
          loop
          muted
          className="preloader-video"
          src={videoSource} // Corrected import statement
          type="video/mp4"
        />
      )}
    </div>
  );
};

export default Preloader;
