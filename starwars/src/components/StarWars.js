import React from 'react';
import './StarWars.css';

const StarWars = (props) => {
    return (
        <div className='char-count'>
        <h2>{props.char.name}</h2>
        <div className='attr'>
        <h3>Gender</h3>
        <p>{props.gender}</p>
        </div>
        <h3>Birth Year</h3>
        <p>{props.char.birth_year}</p>
        <h3>Height</h3>
        <p>{props.char.height}</p>
        <h3>Eye Color:</h3>
        <p>{props.char.eye_color}</p>
        <h3>Skin Color</h3>
        <p>{props.char.skin_color}</p>
        <h3>Mass: </h3>
        <p>{props.char.mass}</p>
        </div>
    )

}
export default StarWars;