import LandingPageContent from "./Components/LandingPageContent/LandingPageContent"
import Downtown from "./Components/Downtown/Downtown"
import Front from "./Components/Front/Front"
import Nav from "./Components/Nav/Nav.jsx"
// import PreLoader from "./Components/PreLoader/PreLoader.jsx" // Correct import name

import { useState, useEffect } from 'react';
import videoSource from "./assets/Rise.mp4";
import './Components/PreLoader/PreLoader.css';
import Circle from "./Components/Circle/Circle.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 5 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
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
      {!isLoading && ( // Show the components when loading is complete
        <>
        <Circle />  
          <Nav />
          <Front />
          <LandingPageContent />
          <Downtown />
        </>
      )}
    </>
  );
}

export default App;
