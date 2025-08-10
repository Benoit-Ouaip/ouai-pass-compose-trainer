import { useEffect } from 'react';

const BackgroundPreloader = () => {
  useEffect(() => {
    // Précharger l'image de fond
    const img = new Image();
    img.src = '/lovable-uploads/189513c8-c4b7-4617-b924-c40123e226d9.png';
  }, []);

  return null;
};

export default BackgroundPreloader;