import  { useEffect } from 'react';
import Particles from 'particles.js';

const ParticleComponent = () => {
  useEffect(() => {
    Particles.init({
      selector: '.background',
      color: '#ffffff',
      connectParticles: true,
      speed: 0.6,
      sizeVariations: 4,
      maxParticles: 150,
    });
  }, []);

  return <div className="background" />;
};

export default ParticleComponent;
