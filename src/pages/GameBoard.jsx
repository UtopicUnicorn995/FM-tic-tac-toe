import {useState, useEffect} from 'react'

export default function GameBoard({initialGameBoard}){


    return(
        <ol className='board'>
            {initialGameBoard.map(board=> (
        <li>
            <ul>
            {board.map(box => (
                <li className='box'>
                    {console.log(box)}as
                </li>
            ))}
            </ul> 
        </li>
    ))}
        </ol>
    )
}