import React, { Component } from 'react';
import URLhandler from '../containers/URLhandler';

class terrainCard extends Component {
    constructor() {
        super();
        this.state = {};
        // let details = React.createRef();

    }

    render() {
        const { name, rotationPeriod, orbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population, residents, films } = this.props;
        const handleClick = () => {
            const details = this.refs.details;
            details.classList.contains('hidden') ? details.classList.remove('hidden') : details.classList.add('hidden');

        }

        return (
            <div>
                <h1 className='name' key='name' onClick={handleClick}>{name}</h1>
                <div ref='details' className='hidden'
                >
                    <p key='rotationPeriod'><strong>Rotation period: </strong> {rotationPeriod}</p>
                    <p key='orbitalPeriod'><strong>Orbital Period: </strong>{orbitalPeriod}</p>
                    <p key='diameter'><strong>Diameter: </strong> {diameter}</p>
                    <p key='climate'><strong>Climate: </strong> {climate}</p>
                    <p key='gravity'><strong>Gravity: </strong> {gravity}</p>
                    <p key='terrain'><strong>Terrain: </strong> {terrain}</p>
                    <p key='surfaceWater'><strong>Surface water: </strong>{surfaceWater}% covered</p>
                    <p key='population'><strong>Population: </strong>{population}</p>
                    <p key='residents'><strong>Residents: </strong> <span> {residents.map((url, i) => <URLhandler url={url} type='name' i={i} len={residents.length} />)}</span></p>
                    <p key='films'><strong>Films :</strong> <span> {films.map((url, i) => <URLhandler url={url} type='title' i={i} len={films.length} />)}</span></p>
                </div>
            </div>
        )
    }

}
export default terrainCard;
