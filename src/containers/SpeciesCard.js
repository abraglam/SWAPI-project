import React, { Component } from 'react';
import URLhandler from '../containers/URLhandler';

class SpeciesCard extends Component {
    constructor() {
        super();
        this.state = {};
        // let details = React.createRef();

    }

    render() {
        const { name, classification, designation, averageHeight, skinColors, hairColors, eyeColors, averageLifespan, homeWorld, language, people, films, } = this.props;
        const handleClick = () => {
            const details = this.refs.details;
            details.classList.contains('hidden') ? details.classList.remove('hidden') : details.classList.add('hidden');

        }

        return (
            <div>
                <h1 className='name' key='name' onClick={handleClick}>{name}</h1>
                <div ref='details' className='hidden'
                >
                    <p key='classification'><strong>Classification: </strong> {classification}</p>
                    <p key='designation'><strong>Designation: </strong> {designation}</p>
                    <p key='averageHeight'><strong>Average height: </strong> {averageHeight}cm</p>
                    <p key='skinColors'><strong>Skin colors: </strong> {skinColors}</p>
                    <p key='hairColors'><strong>Hair colors: </strong>{hairColors}</p>
                    <p key='eyeColors'><strong>Eye colors: </strong> {eyeColors}</p>
                    <p key='averageLifespan'><strong>Average lifespan: </strong>{averageLifespan}</p>
                    <p key='language'><strong>Language: </strong> {language}</p>
                    <p key='homeWorld'><strong>From the planet: </strong> <URLhandler url={homeWorld} type='name' i={0} len={1} /> </p>
                    <p key='people'><strong>Characters of this species: </strong> <span> {people.map((url, i) => <URLhandler url={url} type='name' i={i} len={people.length} />)}</span></p>
                    <p key='films'><strong>In the films: </strong>  <span> {films.map((url, i) => <URLhandler url={url} type='title' i={i} len={films.length} />)}</span></p>
                </div>
            </div>
        )
    }

}
export default SpeciesCard;
