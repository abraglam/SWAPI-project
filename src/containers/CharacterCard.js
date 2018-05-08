import React, { Component } from 'react';
import URLhandler from '../containers/URLhandler';

class CharacterCard extends Component { 
    constructor(){
        super();
        this.state = {};
        // let details = React.createRef();
        
    }
    
    render(){
    const {name, birthYear, eyeColor, height, weight, skinColor, homeWorld, films, species, starships, vehicles} = this.props;
   const handleClick = () => {
       const details = this.refs.details;
       details.classList.contains('hidden') ? details.classList.remove('hidden') : details.classList.add('hidden');
       
   }
   
   return(
<div>
<h1 className='name' key='name' onClick={handleClick}>{name}</h1>
    <div ref='details' className='hidden'
    >
    <p key='birthYear'><strong>Year born:</strong> {birthYear}</p>
    <p key='homeWorld'><strong>From the planet:</strong> <URLhandler url={homeWorld} type='name' i={0} len={1} /> </p>
    <p key='eyeColor'><strong>Eye color:</strong> {eyeColor}</p>
    <p key='skinColor'><strong>Skin color:</strong> {skinColor}</p>
    <p key='height'><strong>Height:</strong> {height}cm</p>
    <p key='weight'><strong>Weight:</strong> {weight}kg</p>
    <p key='species'><strong>Species:</strong> <span> {species.map((url, i) => <URLhandler url={url} type='name' i={i} len={species.length} /> )}</span></p>
    <p key='starships'><strong>Piloted:</strong> <span> {starships.map((url,i) => <URLhandler url={url} type='name' i={i} len={starships.length}/> )}</span></p>
    <p key='vehicles'><strong>Drove:</strong> <span> {vehicles.map((url,i) => <URLhandler url={url} type='name' i={i} len={vehicles.length}/> )}</span></p>
    <p key='films'><strong>In the films:</strong>  <span> {films.map((url,i) => <URLhandler url={url} type='title' i={i} len={films.length}/> )}</span></p>
    </div>
</div>
)}

}
export default CharacterCard;
