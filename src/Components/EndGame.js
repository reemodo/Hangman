import React from 'react'


export function EndGame({handelSolution, gameState, setGameState,solution}) {
    return (
        <>
          {gameState.isWinner? <div>Congratulation!</div>:<><div>Game over</div><div>Opppps It was {solution.word}</div></>}
          <button onClick={()=>{setGameState({state:"start", isWinner:false});handelSolution();}}>Restart</button>
        </>
    )
}
