import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './accueil/Accueil';
import Realisations from './realisations/Realisations';
import Design from './design/Design';
import Dev from './dev/Dev';
import Expertise from './expertise/Expertise';
import Contact from './contact/Contact';
import Navbar from './navbar/Navbar'
import PageAirbus from './pageAirbus/PageAirbus';


function Router() {
   
    return (
        <div>
          <Navbar />
            <Switch>
                <Route exact path='/' component={Accueil} />
                <Route path='/expertise' component={Expertise} />
                <Route path='/realisations' component={Realisations} />
                <Route path='/design' component={Design} />
                <Route path='/dev' component={Dev} />   
                <Route path='/contact' component={Contact} />
                <Route path='/pageAirbus' component={PageAirbus} />

            </Switch>
          </div>
    )
}

export default Router
