import React from 'react'
import { Score } from './Score';
import { Solution } from './Solution';
import { Letters } from './Letters'
import { useState } from 'react'


export function StartGame({ setGameState ,solution}) {
  // LetterStatus State
  const generateLetterStatuses = function () {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];
    const newLetterStatus = {}
    for (let i = 0; i < alphabet.length; i++) {
      newLetterStatus[alphabet[i]] = false

    }
    return newLetterStatus
  }
  const [letterStatus, setLetterStatus] = useState(() => generateLetterStatuses())
  const handelLetterStatus = (letter) => {
    const newLetterStatus = { ...letterStatus }
    newLetterStatus[letter] = !letterStatus[letter]
    setLetterStatus(newLetterStatus)
    const word = [...solution.word]
    if(word.every(letter => newLetterStatus[letter]))
     setGameState({state:"EndGame",isWinner:true});

  }
  // Score State
  const [score, setScore] = useState(100)
  const handelScore = (letter) => {
    if (solution.word.indexOf(letter) === -1) {
      if (score - 15 <= 0) {
        setGameState({state:"EndGame",isWinner:false})
      }
      else
        setScore(score - 15)
    }
    else {
      setScore(score + 15)
    }

  }
  const selectLetter = (letter) => {
    handelLetterStatus(letter);
    handelScore(letter);
  }
  return (
    <>
      <Score score={score} />
      <Solution solution={solution} letterStatus={letterStatus} handelLetterStatus={selectLetter} />
      <Letters letterStatus={letterStatus} handelLetterStatus={selectLetter} />
    </>
  );
}
