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
            <h1>Cotización <br /> CanepaDev</h1>
            {/*             <div className="subtitle">
                <p>En colaboracion con <span>Click MKT</span></p>
            </div> */}
        </header>
    )
}

export default Hero
