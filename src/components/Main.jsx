import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileAlt, faEnvelope, faDatabase, faComments, faWrench, faTools, faHourglassEnd, faRedo, faChartSimple, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <main className='container main'>
            <div className="card">
                <div className="hero-card">
                    <h2>Diseño <br /> Landingpage</h2>
                    <h2>$300</h2>
                </div>
                <div className="main-card">
                    <p>Página web responsiva y personalizada</p>
                    <div className="footer-card">
                        <div className="col-1">
                            <ul>
                                <li><FontAwesomeIcon icon={faDesktop} /> Diseño desktop (computadoras)</li>
                                <li><FontAwesomeIcon icon={faMobileAlt} /> Diseño mobile (celulares)</li>
                                {/* <li><FontAwesomeIcon icon={faEnvelope} /> Formulario de contacto</li> */}
                                <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Posicionamiento SEO en Google</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul>
                                {/* <li><FontAwesomeIcon icon={faDatabase} /> Base de datos en Google Sheet</li> */}
                                <li><FontAwesomeIcon icon={faComments} /> Botón directo a Whatsapp</li>
                                <li><FontAwesomeIcon icon={faTools} /> Animaciones basicas</li>
                                <li><FontAwesomeIcon icon={faChartSimple} /> Google Analitycs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card dark-card">
                <div className="hero-card">
                    <h2>Hosting<br />  & Dominio</h2>
                    <h2>$100</h2>
                </div>
                <div className="main-card">
                    <p>Host para alojar la web y dominio .com</p>
                    <div className="footer-card">
                        <div className="col-1">
                            <ul>
                                <li><FontAwesomeIcon icon={faDatabase} /> Alojamiento web</li>
                                <li><FontAwesomeIcon icon={faEnvelope} /> Dominio web .com</li>
                                <li><FontAwesomeIcon icon={faEnvelope} /> Correo Electrónico</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul>
                                <li><FontAwesomeIcon icon={faWrench} /> Mantenimiento de Host</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card"> 
                <div className="hero-card">
                    <h2>Precio<br />  Final</h2>
                    <h2>$400</h2>
                </div>
                <div className="main-card">
                    <p>Liquidación final: Landingpage y Host</p>
                    <div className="footer-card">
                        <div className="col-1">
                            <ul>
                                <li><FontAwesomeIcon icon={faHourglassEnd} /> No incluye cambios futuros</li>
                                <li><FontAwesomeIcon icon={faRedo} /> No incluye mejoras</li>
                                <li><FontAwesomeIcon icon={faDatabase} /> Una vez transcurrido el año deberá abonar el host nuevamente</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
