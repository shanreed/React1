import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import '../css/navigation.css';

function Navigation() {
    return (
        <div className = 'navigation'>
        <NavLink className = 'nav' to = '#'>HEROES FROMA-Z</NavLink>
        <NavLink className = 'nav' to = '#'>MARVEL</NavLink>
        <NavLink className = 'nav' to = '#'>DC</NavLink>
        <NavLink className = 'nav' to = '#'>REAL WORLD HEROES</NavLink>
        <NavLink className = 'nav' to = '#'>ANOTHER</NavLink>
        <NavLink className = 'nav' to = '#'>ANOTHER</NavLink>
        <NavLink className = 'nav' to = '#'>ANOTHER</NavLink>
        </div>
        
    )
}

export default Navigation;