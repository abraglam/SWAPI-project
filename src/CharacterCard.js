import React from 'react';

const CharacterCard = ({name, birthYear, eyeColor, height, weight, skinColor, homeWorld, films, species, starships, vehicles}) =>
{return(
<div>
<h2>{name}</h2>
<ul>
    <li>Year born: {birthYear}</li>
    <li>From the planet: {homeWorld}</li>
    <li>Eye color: {eyeColor}</li>
    <li>Skin color: {skinColor}</li>
    <li>Height: {height}cm</li>
    <li>Weight: {weight}kg</li>
    <li>Species: {species}</li>
    <li>Piloted: {starships}</li>
    <li>Drove: {vehicles}</li>
    <li>In the films {films}</li>
</ul>
</div>
)
}

export default CharacterCard;