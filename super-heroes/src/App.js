import React from 'react';


import Navigation from './components/navigation';
import Legends from './components/legends';
import Heroes from './components/heroes';
import Name from './components/name';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className = 'body'>
    <div className = 'top'>
      <header>
      <p className = 'header'>LEGENDS & SUPER HEROES</p>
      <Navigation />
      <p className = 'header'>Lorem ipsum dolor sit amet, ius vero fastidii at, 
      ea quo harum timeam lucilius. Sed alii sensibus prodesset eu. Qui paulo 
      semper periculis at, nominavi antiopam delicatissimi vel ut. Facilis 
      accumsan consectetuer ne vim, et mei tritani ponderum delicata. Vel ut 
      petentium dissentias eloquentiam, utinam vulputate et nam, ne est dicit
       feugiat sapientem. Detraxit intellegam cu eum. Porro partem ea est, ad
        admodum convenire per. Mea ad esse similique, usu sumo consectetuer ei. 
        Ut vim quas etiam consequat, vel te esse appareat. Pri quis soluta impetus
         ne, eu usu debet munere conclusionemque.
</p>

      </header>
      </div>
      <Legends />
      <Name />
      <Heroes />
      <Footer />
    </div>
  );
}

export default App;
