import React from 'react'
import './Accueil.css'
import video from './video.mp4'
import design from './design.jpg'
import web from './web.jpg'

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
                    <br/>
                    <p className="titrePres">Expertise</p>
                
                    <div className="parentCard">
                        <div>
                            <p className="expertise">
                            <img className="design" src={design} width="80%" alt='Design industriel'></img>
                            <p className="des">Design industriel</p>
                            </p>
                        </div>
                        <div>
                            <p className="expertise">
                            <img className="web" src={web} width="80%" alt='Développement web'></img> 
                            <p className="dev">Développement web</p>
                            </p>
                        </div>
                    </div>

                    <br/>
                    <p className="titrePres">Nos références</p>
                        <p>
                            Ils nous font confiance
                        </p>

                </p>
                
            </div>
        
        </div>
    )
}

export default Accueil
