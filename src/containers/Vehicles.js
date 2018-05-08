import React, { Component } from "react";
import VehiclesCard from './VehiclesCard';
import './Card.css'


class Vehicles extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            count: 0,
            load: 0
        };
    }


    async componentDidMount() {
        let swapi = await fetch('https://swapi.co/api/vehicles/');
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
                            <VehiclesCard
                                name={results[i].name}
                                model={results[i].model}
                                manufacturer={results[i].manufacturer}
                                costInCredits={results[i].cost_in_credits}
                                lengthOfShip={results[i].length}
                                mAS={results[i].max_atmosphering_speed}
                                crew={results[i].crew}
                                passengers={results[i].passengers}
                                cargoCapacity={results[i].cargo_capacity}
                                consumables={results[i].consumables}
                                vehicleClass={results[i].vehicle_class}
                                pilots={results[i].pilots}
                                films={results[i].films}
                            />
                        )
                    })
                }
            </div>
    }
}
export default Vehicles;