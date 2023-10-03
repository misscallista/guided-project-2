import { useState, useEffect } from 'react';
import React from 'react';


function Characters() {
    const [characters, setCharacters] = useState([]);
    useEffect( () => {
        let data = fetch('http://localhost:3001/api/characters');
        data
        .then((res) => { res.json() })
        .then((characters) => 
            setCharacters(characters)) }, []);
            // characters is undefined here. unsure how to resolve
    return (
        <div className='character' >
        {characters.map(
            (character, index) => {
                return (
                    <p key={index}>{character.name}</ p>
            );
        }
    )}
    </ div>);
        
}

export default Characters;