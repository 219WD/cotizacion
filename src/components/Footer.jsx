import React from 'react'
import Circulo from '../assets/0.svg'
import Www from '../assets/1.svg'
import './Footer.css'

const Footer = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.canepadev.com'; // Reemplaza con tu URL deseada
  };
  return (
    <div className='container footer'>
        <button onClick={handleRedirect}>
            WWW.CANEPADEV.COM
        </button>
        <img src={Circulo} alt="" className='position2' />
        <img src={Www} alt="" className='position3' />
    </div>
  )
}

export default Footer