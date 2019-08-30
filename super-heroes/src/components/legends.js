import React from 'react';
import LegendCard from './legendCard';
import '../css/legends.css';

function Legends() {
    return (
        <div className = 'legends'>
            <div>
            <h2 className = 'sub-headings'>LEGENDS</h2>
            </div>
            <div>
            <p className = 'legend-info'>
            Lorem ipsum dolor sit amet, ius vero fastidii at, 
      ea quo harum timeam lucilius. Sed alii sensibus prodesset eu. Qui paulo 
      semper periculis at, nominavi antiopam delicatissimi vel ut. Facilis 
      accumsan consectetuer ne vim, et mei tritani ponderum delicata. Vel ut 
      petentium dissentias eloquentiam, utinam vulputate et nam, ne est dicit
       feugiat sapientem. Detraxit intellegam cu eum. Porro partem ea est, ad
        admodum convenire per. Mea ad esse similique, usu sumo consectetuer ei. 
        Ut vim quas etiam consequat, vel te esse appareat. Pri quis soluta impetus
         ne, eu usu debet munere conclusionemque.
            </p>
            </div>
            <div>
                <LegendCard />
            </div>
        </div>
    )
}

export default Legends;