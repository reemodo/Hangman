import React from 'react'
import { Space } from './Space'
import { Letter } from './Letter'

export function Solution({solution, letterStatus}) {
    const spaceText = [...('-'.repeat(solution.word.length))]
    return (
        <>
   
            <div className='solution'>{spaceText.map((space, index)  =>  letterStatus[solution.word[index]] === false ? 
            <Letter letter={space} letterStatus={letterStatus[solution.word[index]]} key={index}/> :
            <Letter letter={solution.word[index]} letterStatus={letterStatus[solution.word[index]]} key={index}/>)}</div>
            <div>Hint: {solution.hint}</div>
        </>
    )
}
