
import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [active, setActive]= useState(false)

  return (
    <div>
      <div className='navPericolo'>
      </div>
      <h1 className="title_pericolo">
          <Link className='titreLink' style={{ textDecoration: 'none', zIndex: '20' }} to="/">Cactus design</Link>

        </h1>
      <div>
      </div>

      <div id="menuToggle">
        <a className='burger' id={active?'active':''} onClick={()=>setActive(!active?true:false)}/>

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu" onClick={()=>setActive(false)}>
          <li><Link to='/'>Accueil</Link></li>
          <li><Link to='/expertise'>Expertise</Link></li> 
          <li><Link to='/realisations'>Réalisations</Link></li> 
          <li><Link to='/contact'>Contact</Link></li> 

        </ul>
    
      </div>

    </div>

  );
}

export default Navbar