import React from 'react'
import './Design.css'
import { Link } from 'react-router-dom'
import automotive from './images/automotive.jpg'
import mitu from './images/mitu.jpg'
import rcutr from './images/rcutr.jpg'
import airbus from './images/airbus.jpg'
import mobilier from './images/mobilier.jpg'
import omega from './images/omega.jpg'
import produitAirbus from './images/produitAirbus.jpg'
import produit from './images/produit.jpg'
import aerojones from './images/aerojones.jpg'



function Design() {
    return (
        <div>
            <p className="paragraphe3">
            <p className="titreDesign">Projets Design</p>
            <div className="L1">
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign" src={automotive} alt='image design'></img> 
                    </Link>
                </div>
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign" src={mitu} alt='image design'></img> 
                    </Link>
                </div>
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign2" src={rcutr} alt='image design'></img> 
                    </Link>
                </div>
            </div>

            <div className="L2">
                <div className="pageDesign">
                    <Link to ={{pathname: '/pageAirbus' }}>
                        <img className="imageDesign" src={airbus} alt='image design'></img> 
                    </Link>
                </div>
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign2" src={mobilier} alt='image design'></img> 
                    </Link>
                </div>
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign" src={omega} alt='image design'></img> 
                    </Link>
                </div>
            </div>

            <div className="L3">
                
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign2" src={produit} alt='image design'></img> 
                    </Link>
                </div>
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign" src={produitAirbus} alt='image design'></img> 
                    </Link>
                </div>
                <div className="pageDesign">
                    <Link to ={{pathname: '/design' }}>
                        <img className="imageDesign2" src={aerojones} alt='image design'></img> 
                    </Link>
                </div>
                
            </div>
        </p>
        </div>
    )
}


export default Design
