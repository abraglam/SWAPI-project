import React, { Component } from "react";
import CharaterCard from './CharacterCard';
import urlHandler from './URLhandler';

class Characters extends Component{
constructor(){
    super();
    this.state = {};
}

    async componentDidMount(){
    let swapi = await fetch('https://swapi.co/api/people/');
    let swapiJSON = await swapi.json();
    let results = swapiJSON.results;
    do {
        let next = await fetch(swapiJSON.next);
        swapiJSON = await next.json();
        let nextResults = swapiJSON.results;
        results.push(nextResults);
    }  while (swapiJSON.next); 
    results = results.reduce(function(a,b){return a.concat(b)}, []);
    this.setState(results);
    

    
}


render(){
    const results = Object.values(this.state);
    
    return results.length < 1 ? <h1>Loading...</h1> :
<div>
     {
         results.map((character, i) => {
 
             return(
                 <CharaterCard 
                 name = {results[i].name}
                 birthYear = {results[i].birth_year}
                 eyeColor = {results[i].eye_color}
                 height = {results[i].height}
                 weight = {results[i].mass}
                 skinColor = {results[i].skin_color}
                 homeWorld = {urlHandler(results[i].homeworld, 'name')}
                 films = {results[i].films}
                 species = {results[i].species}
                 starships = {results[i].starships}
                 vehicles = {results[i].vehicles}
                 />
             )
         })
     }
</div>
}
}
export default Characters;