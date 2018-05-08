import React, { Component } from 'react';
import URLhandler from '../containers/URLhandler';

class StarshipsCard extends Component {
    constructor() {
        super();
        this.state = {};
        // let details = React.createRef();

    }

    render() {
        const { name, model, manufacturer, costInCredits, lengthOfShip, mAS, crew, passengers, cargoCapacity, consumables, hyperdriveRating, MGLT, starshipClass, pilots, films } = this.props;
        const handleClick = () => {
            const details = this.refs.details;
            details.classList.contains('hidden') ? details.classList.remove('hidden') : details.classList.add('hidden');

        }

        return (
            <div>
                <h1 className='name' key='name' onClick={handleClick}>{name}</h1>
                <div ref='details' className='hidden'
                >
                    <p key='model'><strong>Model: </strong> {model}</p>
                    <p key='manufacturer'><strong>Manufacturer: </strong>{manufacturer}</p>
                    <p key='costInCredits'><strong>Cost in credits: </strong> {costInCredits}</p>
                    <p key='lengthOfShip'><strong>Length of ship: </strong> {lengthOfShip}</p>
                    <p key='mAS'><strong>Maximum speed in the atmosphere: </strong> {mAS}</p>
                    <p key='crew'><strong>Crew: </strong> {crew}</p>
                    <p key='passengers'><strong>Passengers: </strong>{passengers}</p>
                    <p key='cargoCapacity'><strong>Cargo capacity <small>(in kilograms)</small>: </strong>{cargoCapacity}</p>
                    <p key='consumables'><strong>Consumables Carried: </strong>{consumables}</p>
                    <p key='hyperdriveRating'><strong>Hyperdrive Class: </strong>{hyperdriveRating}</p>
                    <p key='MGLT'><strong>Speed in Megalights/hour: </strong>{MGLT}</p>
                    <p key='starshipClass'><strong>Starship class: </strong>{starshipClass}</p>
                    <p key='pilots'><strong>pilots: </strong> <span> {pilots.map((url, i) => <URLhandler url={url} type='name' i={i} len={pilots.length} />)}</span></p>
                    <p key='films'><strong>Films :</strong> <span> {films.map((url, i) => <URLhandler url={url} type='title' i={i} len={films.length} />)}</span></p>
                </div>
            </div>
        )
    }

}
export default StarshipsCard;
