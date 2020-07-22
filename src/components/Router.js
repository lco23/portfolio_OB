import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './accueil/Accueil';
import Realisations from './realisations/Realisations';
import Navbar from './navbar/Navbar'


function Router() {
   
    return (
        <div>
          <Navbar />
            <Switch>
                <Route exact path='/' component={Accueil} />
                <Route path='/realisations' component={Realisations} />
                {/* <Route path='/liensutiles' component={LiensUtiles} /> */}
                {/* <Route path='/mentionslegales' component={MentionsLegales} /> */}
                {/* <Route path='/politiqueconfidentialite' component={PolitiqueConfidentialite} /> */}
                {/* <Route path='/authentification' component={Authentification} /> */}
                {/* <Route path='/monespace' component={EspaceUtilisateur} /> */}
            </Switch>
          </div>
    )
}

export default Router
