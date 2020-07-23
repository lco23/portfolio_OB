import React from 'react'
import './Accueil.css'
import video from './video.mp4'
import design from './design.jpg'
import web from './web.jpg'
import { Link } from 'react-router-dom'
import aerojones from './logoClients/aerojones.png'
import airbus from './logoClients/airbus.png'
import faurecia from './logoClients/faurecia.jpg'
import hager from './logoClients/hager.jpg'
import lelynx from './logoClients/lelynx.jpg'
import tortel from './logoClients/tortel.jpg'
import visualfirm from './logoClients/visualfirm.jpg'



const Accueil = () =>{
    return (
        <div>
            <div className="video">
                <video autoPlay loop muted
                style={{
                    zIndex: "-1",
                    transform: "translate(0%, -20%)",
                    width: "100%"
                }}
                >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div>
                <p className="paragraphe1">
                    <p className="titrePres">Présentation</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.
                    </p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.
                    </p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.
                    </p>


                    <br/>
                    <p className="titrePres">Réalisation</p>
                
                    <div className="parentCard">
                        <div>
                            <p className="expertise">
                            <Link to ={{pathname: '/design' }}>
                                <img className="design" src={design} alt='Design industriel'></img>
                            </Link>
                            <p className="des">Design industriel</p>
                            </p>
                        </div>
                        <div>
                            <p className="expertise">
                            <Link to ={{pathname: '/design' }}>
                                <img className="web" src={web} alt='Développement web'></img> 
                            </Link>
                            <p className="dev">IHM / Développement web</p>
                            </p>
                        </div>
                    </div>

                    <br/>
                    <p className="titrePres">Clients</p>
                          
                            <div className="parentClient">
                            <div>
                                <div>
                                    <img className="logo" src={hager}  alt='Logo Hager'></img>
                                </div>
                                <div>
                                    <img className="logo" src={aerojones} alt='Logo Aerojones'></img>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className="logo" src={airbus} alt='Logo Airbus'></img>
                                </div>
                                <div>
                                    <img className="logo" src={faurecia} alt='Logo Faurecia'></img>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className="logo" src={lelynx} alt='Logo Lelynx'></img>
                                </div>
                                <div>
                                    <img className="logo" src={tortel} alt='Logo Tortel'></img>
                                </div>
                            </div>
                                <div>
                                    <img className="logo" src={visualfirm} alt='Logo Visualfirm'></img>
                                </div>
                        </div>
                        
                </p>
                
            </div>
        
        </div>
    )
}

export default Accueil
