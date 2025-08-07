import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const detectIpad = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIpadDevice = /ipad|macintosh/.test(userAgent) && 'ontouchend' in document;
      setIsIpad(isIpadDevice);
    };

    detectIpad();
  }, []);

  return { isIpad };
};