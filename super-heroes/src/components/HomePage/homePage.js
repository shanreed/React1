import React from 'react';


import HomeHeader from './homeHeader';
import Legends from './legends';
import Heroes from './heroes';
import Name from './name';


function HomePage() {
    return (
        <div>
            <HomeHeader />
            <Legends />
            <Name />
            <Heroes />
            
        </div>
    )
}

export default HomePage;