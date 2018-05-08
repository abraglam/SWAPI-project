import React, { Component } from 'react';
import URLhandler from '../containers/URLhandler';

class FilmsCard extends Component {
    constructor() {
        super();
        this.state = {};
        // let details = React.createRef();

    }

    render() {
        const { title, episodeId, openingCrawl, director, producer, releaseDate, characters, planets, species, starships, vehicles } = this.props;
        const handleClick = () => {
            const details = this.refs.details;
            details.classList.contains('hidden') ? details.classList.remove('hidden') : details.classList.add('hidden');

        }

        return (
            <div>
                <h1 className='name' key='title' onClick={handleClick}>{title}</h1>
                <div ref='details' className='hidden'
                >
                    <p key='episodeId'><strong>Episode number:</strong> {episodeId}</p>
                    <p key='openingCrawl'><strong>Opening crawl: </strong><scroll>{openingCrawl}</scroll></p>
                    <p key='director'><strong>Director: </strong> {director}</p>
                    <p key='producer'><strong>Producer: </strong> {producer}</p>
                    <p key='releaseDate'><strong>Released on: </strong> {releaseDate}</p>
                    <p key='characters'><strong>Characters:</strong><span> {characters.map((url, i) => <URLhandler url={url} type='name' i={i} len={characters.length} />)}</span></p>
                    <p key='planets'><strong>Planets:</strong><span> {planets.map((url, i) => <URLhandler url={url} type='name' i={i} len={planets.length} />)}</span></p>
                    <p key='species'><strong>Species:</strong> <span> {species.map((url, i) => <URLhandler url={url} type='name' i={i} len={species.length} />)}</span></p>
                    <p key='starships'><strong>Starships:</strong> <span> {starships.map((url, i) => <URLhandler url={url} type='name' i={i} len={starships.length} />)}</span></p>
                    <p key='vehicles'><strong>Vehicles:</strong> <span> {vehicles.map((url, i) => <URLhandler url={url} type='name' i={i} len={vehicles.length} />)}</span></p>
                </div>
            </div>
        )
    }

}
export default FilmsCard;
