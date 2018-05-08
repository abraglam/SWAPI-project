import React, { Component } from "react";
import CharaterCard from './CharacterCard';
import './Card.css'


class Characters extends Component{
constructor(){
    super();
    this.state = {
        results: [],
        count: 0,
        load: 0
    };
}


    async componentDidMount(){
    let swapi = await fetch('https://swapi.co/api/people/');
    let swapiJSON = await swapi.json();
    let results = swapiJSON.results;
    const count = swapiJSON.count
    this.setState(
        {count: count,
         load: results.length
        })
    do {
        let next = await fetch(swapiJSON.next);
        swapiJSON = await next.json();
        let nextResults = swapiJSON.results;
        results.push(nextResults);
        results = results.reduce(function(a,b){return a.concat(b)}, []);
        this.setState({load: results.length})
    }  while (swapiJSON.next); 
   
    this.setState({results: results});  
}


render(){
    const results = [...this.state.results];

    return !results.length ? !this.state.count ? <h1> Loading . . . </h1> : <h1> {Math.round((this.state.load/this.state.count)*100)}% Loaded . . . </h1>:
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
                 homeWorld = {results[i].homeworld}
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