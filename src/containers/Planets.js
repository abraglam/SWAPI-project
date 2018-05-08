import React, { Component } from "react";
import PlanetsCard from './PlanetsCard';
import './Card.css'


class Planets extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            count: 0,
            load: 0
        };
    }


    async componentDidMount() {
        let swapi = await fetch('https://swapi.co/api/planets/');
        let swapiJSON = await swapi.json();
        let results = swapiJSON.results;
        const count = swapiJSON.count
        this.setState(
            {
                count: count,
                load: results.length
            })
        do {
            let next = await fetch(swapiJSON.next);
            swapiJSON = await next.json();
            let nextResults = swapiJSON.results;
            results.push(nextResults);
            results = results.reduce(function (a, b) { return a.concat(b) }, []);
            this.setState({ load: results.length })
        } while (swapiJSON.next);

        this.setState({ results: results });
    }


    render() {
        const results = [...this.state.results];

        return !results.length ? !this.state.count ? <h1> Loading . . . </h1> : <h1> {Math.round((this.state.load / this.state.count) * 100)}% Loaded . . . </h1> :
            <div>
                {
                    results.map((character, i) => {

                        return (
                            <PlanetsCard
                                name={results[i].name}
                                rotationPeriod={results[i].rotation_period}
                                orbitalPeriod={results[i].orbital_period}
                                diameter={results[i].diameter}
                                climate={results[i].climate}
                                gravity={results[i].gravity}
                                terrain={results[i].terrain}
                                surfaceWater={results[i].surface_water}
                                population={results[i].population}
                                residents={results[i].residents}
                                films={results[i].films}
                            />
                        )
                    })
                }
            </div>
    }
}
export default Planets;