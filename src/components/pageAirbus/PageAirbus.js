import React from 'react'
import './PageAirbus.css'
import { Link } from 'react-router-dom'
import airbus01 from './images/airbus01.jpg'
import airbus02 from './images/airbus02.jpg'
import airbus03 from './images/airbus03.jpg'
import airbus04 from './images/airbus04.jpg'
import design from '../accueil/design.jpg'
import web from '../accueil/web.jpg'



function PageAirbus() {
    return (
        <div className="textePresentation">
            <div className="pageAirbus">

                <div className="titreAirbusHelicopters">
                    <p>Airbus Helicopters</p>
                </div>

                <p>DATE : 2016</p>
                <p>CLIENT : Airbus Helicopters</p>
                <p>CATEGORIES : Rendus réalistes</p>
                <br />
                <p>DESCRIPTION DU PROJET</p>
                <p className="desProjet">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
            </div>

            <div className="parentCard">
                <p className="expertise">
                    <img className="imageAh01" src={airbus01} alt='image Airbus'></img>
                </p>
            </div>
            <div className="parentCard">
                <p className="expertise">
                    <img className="imageAh01" src={airbus02} alt='image Airbus'></img>
                </p>
            </div>
            <div className="parentCard">
                <p className="expertise">
                    <img className="imageAh01" src={airbus03} alt='image Airbus'></img>
                </p>
            </div>
            <div className="parentCard">
                <p className="expertise">
                    <img className="imageAh01" src={airbus04} alt='image Airbus'></img>
                </p>
            </div>


            <hr className="trait" />

            <p className="retour">
                Retour aux réalisations
            </p>

            <div className="parentCard">
                <div>

                    <p className="expertise">
                        <Link to={{ pathname: '/design' }}>
                            <img className="design" src={design} width="70%" alt='Design industriel'></img>
                        </Link>
                        <p className="des">Design industriel</p>
                    </p>
                </div>
                <div>
                    <p className="expertise">
                        <Link to={{ pathname: '/dev' }}>
                            <img className="web" src={web} width="70%" alt='Développement web'></img>
                        </Link>
                        <p className="dev">IHM / Développement web</p>
                    </p>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

        </div>

    )
}

export default PageAirbus

