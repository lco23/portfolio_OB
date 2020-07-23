import React from 'react'
import './Realisations.css'
import design from '../accueil/design.jpg'
import web from '../accueil/web.jpg'
import { Link } from 'react-router-dom'

function Realisations() {
    return (
        <div className="pageRealisation">
            <div className="titre">
                <p>Realisations</p>
            </div>

            <div className="parentCard">
                        <div>
                            <p className="expertise2">
                            <Link to ={{pathname: '/design' }}>
                                <img className="design" src={design} width="70%" alt='Design industriel'></img>
                            </Link> 
                            <p className="des">Design industriel</p>
                            </p>
                        </div>
                        <div>
                            <p className="expertise2">
                            <Link to ={{pathname: '/dev' }}>
                            <img className="web" src={web} width="70%" alt='Développement web'></img> 
                            </Link>
                            <p className="dev">IHM / Développement web</p>
                            </p>
                        </div>
            </div>
            
        </div>
    )
}

export default Realisations
