import React from 'react'
import { Space } from './Space'

export function Solution({word, hint}) {
    const spaceText = [...('-'.repeat(word.length))]

    return (
        <>
            
            <div>{spaceText.map((space,index) => <Space space={space} key={index}/>)}</div>
            <div>Hint: {hint}</div>
        </>
    )
}
