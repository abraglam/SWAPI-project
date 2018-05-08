import React, { Component } from "react";
import FilmsCard from './FilmsCard';
import './Card.css'


class Films extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            count: 0,
            load: 0
        };
    }


    async componentDidMount() {
        let swapi = await fetch('https://swapi.co/api/films/');
        let swapiJSON = await swapi.json();
        let results = swapiJSON.results;
        const count = swapiJSON.count
        this.setState(
            {
                count: count,
                load: results.length
            })
        // do {
        //     let next = await fetch(swapiJSON.next);
        //     swapiJSON = await next.json();
        //     let nextResults = swapiJSON.results;
        //     results.push(nextResults);
        //     results = results.reduce(function (a, b) { return a.concat(b) }, []);
        //     this.setState({ load: results.length })
        // } while (swapiJSON.next);

        this.setState({ results: results });
    }


    render() {
        const results = [...this.state.results];

        return !results.length ? !this.state.count ? <h1> Loading . . . </h1> : <h1> {Math.round((this.state.load / this.state.count) * 100)}% Loaded . . . </h1> :
            <div>
                {
                    results.map((character, i) => {

                        return (
                            <FilmsCard
                                title={results[i].title}
                                episodeId={results[i].episode_id}
                                openingCrawl={results[i].opening_crawl}
                                director={results[i].director}
                                producer={results[i].producer}
                                releaseDate={results[i].release_date}
                                characters={results[i].characters}
                                planets={results[i].planets}
                                species={results[i].species}
                                starships={results[i].starships}
                                vehicles={results[i].vehicles}
                            />
                        )
                    })
                }
            </div>
    }
}
export default Films;