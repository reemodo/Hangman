import React from 'react'

export  function Letter({letter, letterStatus, handelLetterStatus}) {
    

    return (
        <>
            {letterStatus ? <span className=" selectedLetter letter">{letter}</span> : <span onClick={() => handelLetterStatus(letter) } className=" letter">{letter}</span> }
        </>
    )
}
