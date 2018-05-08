import React, { Component } from "react";
import SpeciesCard from './SpeciesCard';
import './Card.css'


class Species extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            count: 0,
            load: 0
        };
    }


    async componentDidMount() {
        let swapi = await fetch('https://swapi.co/api/species/');
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
                            <SpeciesCard
                                name={results[i].name}
                                classification={results[i].classification}
                                designation={results[i].designation}
                                averageHeight={results[i].average_height}
                                skinColors={results[i].skin_colors}
                                hairColors={results[i].hair_colors}
                                eyeColors={results[i].eye_colors}
                                averageLifespan={results[i].average_lifespan}
                                homeWorld={results[i].homeworld}
                                language={results[i].language}
                                people={results[i].people}
                                films={results[i].films}
                            />
                        )
                    })
                }
            </div>
    }
}
export default Species;