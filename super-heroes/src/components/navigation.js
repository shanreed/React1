import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Marvel from './Marvel/marvelHeroes';
import HomePage from './HomePage/homePage';
import Footer from './footer';

import '../css/navigation.css';
import avengersData from '../data/avengersData';



function Navigation() {
    return (
        <div>
      <div className = 'top'>
        <div className = 'navigation'>
          <ul className = 'nav'>
          <li><NavLink className = 'nav-item' exact to = '/'>HOME</NavLink></li>
          <li><NavLink className = 'nav-item' to = '#'>HEROES FROMA-Z</NavLink></li>
          <li><NavLink className = 'nav-item' exact to = '/heroes'>MARVEL</NavLink></li>
          <li><NavLink className = 'nav-item' to = '#'>HEROES</NavLink></li>
          <li><NavLink className = 'nav-item' to = '#'>DC</NavLink></li>
          <li><NavLink className = 'nav-item' to = '#'>REAL WORLD HEROES</NavLink></li>
          <li><NavLink className = 'nav-item' to = '#'>ANOTHER</NavLink></li>
          <li><NavLink className = 'nav-item' to = '#'>ANOTHER</NavLink></li>
          <li><NavLink className = 'nav-item' to = '#'>ANOTHER</NavLink></li>
          </ul>
          </div>
          <div>
              <Route exact path = '/' component = {HomePage} />
              
              <Route
                  exact path="/heroes"
                  render={props => (
                  <Marvel {...props} marvelHeroes={avengersData} />
              )}/>

              <Route path = '/' component = {Footer} />
              </div>
          
         </div>
         
         </div>
    )
}

export default Navigation;