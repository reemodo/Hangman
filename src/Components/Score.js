import React from 'react'
function findClassName(score){
    if(score >= 80){
         return "high-score"
    }
    else if (score <= 50  ){
         return "low-score" 
    }
    return "medium-score"
}
export function Score({score}) {
    

    return (
        <>  
        {
            <div className={findClassName(score)}>{score}</div>
        }
            
        </>
    )
}
