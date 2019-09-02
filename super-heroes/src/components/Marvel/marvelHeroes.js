import React from 'react';
import {Route, NavLink} from 'react-router-dom';



import './css/marvelHeroes.css';


function Marvel(props) {
    return (
        <div className = 'marvel'>
            {props.marvelHeroes.map(hero => (
        <div className="hero-card" key={hero.id}>
          <img src={hero.thumbnail} alt={hero.name} />
          <h3
            onClick={() => props.history.push(`/heroes/${hero.id}/info`)}
          >
            {hero.name}
          </h3>
          <p>({hero.nickname})</p>
        </div>
      ))}
    </div>
  );
}
    

export default Marvel;