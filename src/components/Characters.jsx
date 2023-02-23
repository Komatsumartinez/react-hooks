import React, { useState, useEffect } from 'react'


export const Character = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, [])

    return (
        <div className='Characters'>            
            {characters.map((character,index)=> (
                <div key={index} className='character-card'>
                    <div>
                        <img className='character-image' src={character.image} alt="" />
                    </div>
                    <div className='character-info'>
                        <span>{character.gender}</span>
                        <span>{character.species}</span>
                        <span>{character.status}</span>
                        <span>{character.type}</span>
                    </div>
                </div>
            ))
            }
        </div>
    );
}