import React, { Component } from "react";


class Characters extends Component{
constructor(){
    super();
    this.state = {};
}

    async componentDidMount(){
    let swapi = await fetch('https://swapi.co/api/people/');
    let swapiJSON = await swapi.json();
    this.setState(swapiJSON);
    let results = [this.state.results];
    do {
        let next = await fetch(this.state.next);
        let nextJSON = await next.json();
        this.setState(nextJSON);
        let nextResults = this.state.results;
        results.push(nextResults);   
    } while (this.state.next);
    this.setState(results);
}


render(){
    return (
    <div className='people'>
        <h1>Hello!</h1>
    </div>);
}
}
export default Characters;