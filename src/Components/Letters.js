import React from 'react'
import Letter from './Letter';

export function Letters() {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

    return (
        <>
            Available Letters
            <ul className="lettersList">
                {alphabet.map(letter => <Letter letter={letter} key={letter}/>)}
            </ul>
        </>
    )
}
