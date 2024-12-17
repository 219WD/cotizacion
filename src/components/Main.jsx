import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDesktop, faMobileAlt, faEnvelope,
    faDatabase, faComments, faWrench,
    faTools, faHourglassEnd,
    faChartSimple, faMagnifyingGlass, faPenNib,
    faPalette, faFont,
    faBullhorn,
    faChartLine,
    faReply,
    faSliders,
    faMoneyBillWave,
    faVideo
} from '@fortawesome/free-solid-svg-icons';


const Main = () => {
    return (
        <main className='container main'>
            {/* TARJETA DISEÑO LANDINGPAGE */}
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
                                <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Posicionamiento SEO en Google</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul>
                                <li><FontAwesomeIcon icon={faComments} /> Botón directo a Whatsapp</li>
                                <li><FontAwesomeIcon icon={faTools} /> Animaciones básicas</li>
                                <li><FontAwesomeIcon icon={faChartSimple} /> Google Analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* TARJETA HOSTING & DOMINIO */}
            <div className="card dark-card">
                <div className="hero-card">
                    <h2>Hosting<br /> & Dominio</h2>
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

            {/* TARJETA BRANDING */}
            <div className="card dark-card">
                <div className="hero-card">
                    <h2>Branding</h2>
                    <h2>$200</h2>
                </div>
                <div className="main-card">
                    <p>Diseño de identidad visual</p>
                    <div className="footer-card">
                        <div className="col-1">
                            <ul>
                                <li><FontAwesomeIcon icon={faPenNib} /> Logo</li>
                                <li><FontAwesomeIcon icon={faPalette} /> Paleta de colores</li>
                                <li><FontAwesomeIcon icon={faFont} /> Tipografía</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul>
                                <li><FontAwesomeIcon icon={faVideo} /> Creación de video publicitario para anuncios, web y redes sociales</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* TARJETA META ADS */}
            <div className="card dark-card">
                <div className="hero-card">
                    <h2>Publicidad</h2>
                    <h2>$200</h2>
                </div>
                <div className="main-card">
                    <p>Publicidad en Facebook e Instagram</p>
                    <div className="footer-card">
                        <div className="col-1">
                            <ul>
                                <li><FontAwesomeIcon icon={faBullhorn} /> Estrategia de publicidad</li>
                                <li><FontAwesomeIcon icon={faChartLine} /> Metricas y resultados</li>
                                <li><FontAwesomeIcon icon={faReply} /> Retargeting</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul>
                                <li><FontAwesomeIcon icon={faSliders} /> Optimizacion de anuncios</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* TARJETA PRECIO FINAL */}
            <div className="card">
                <div className="hero-card">
                    <h2>Precio<br /> Final</h2>
                    <h2>$700</h2>
                </div>
                <div className="main-card">
                    <p>Liquidación final: Landingpage y Host</p>
                    <div className="footer-card">
                        <div className="col-1">
                            <ul>
                                <li><FontAwesomeIcon icon={faHourglassEnd} /> No incluye cambios futuros</li>
                                <li><FontAwesomeIcon icon={faMoneyBillWave} /> La inversión en publicidad no esta contemplada en este presupuesto</li>
                                <li><FontAwesomeIcon icon={faDatabase} /> Una vez transcurrido el año deberá abonar el host nuevamente</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
