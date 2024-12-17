import React from 'react'
import './Hero.css'
import Circulo from '../assets/0.svg'
import Www from '../assets/1.svg'

const Hero = () => {
    return (
        <header className='container hero'>
            <img src={Circulo} alt="" className='position1' />
            <img src={Www} alt="" className='position4' />
            <h3>Web Services</h3>
            <h1>Cotización <br /> 219LABS</h1>
            <div className="subtitle">
                <p>Servicio para <span>Alejandro Martinez</span></p>
            </div>
        </header>
    )
}

export default Hero
