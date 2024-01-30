import React from 'react'
import { Letter } from './Letter';
import { useState } from 'react';
export function Letters({letterStatus, handelLetterStatus}) {
    const [alphabet] = useState(Object.keys(letterStatus));
    
    return (
        <>
            Available Letters
            <ul className="lettersList">
                {alphabet.map(letter => <Letter letter={letter} letterStatus={letterStatus[letter]} key={letter} handelLetterStatus={handelLetterStatus}/>)}
            </ul>
        </>
    )
}
