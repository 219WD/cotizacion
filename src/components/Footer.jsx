import React, { useState, useEffect } from 'react';
import Circulo from '../assets/0.svg';
import Www from '../assets/1.svg';
import './Footer.css';

const Footer = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Manejar el evento 'beforeinstallprompt'
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevenir la visualización automática del prompt
      setDeferredPrompt(e); // Guardar el evento para usarlo más tarde
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Mostrar el prompt de instalación
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó instalar la aplicación.');
        } else {
          console.log('El usuario rechazó instalar la aplicación.');
        }
        setDeferredPrompt(null); // Limpiar el evento después de su uso
      });
    }
  };

  return (
    <div className='container footer'>
      <button onClick={handleAddToHomeScreen}>
        Descargar Cotizacion
      </button>
      <img src={Circulo} alt="" className='position2' />
      <img src={Www} alt="" className='position3' />
    </div>
  );
};

export default Footer;
