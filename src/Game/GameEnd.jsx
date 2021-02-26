import React from 'react'
import actions from '../store/actions'
import { useSelector } from 'react-redux'



const GameEnd = () => {

    const gameState = useSelector(()=> actions.get('gameState'))
    let displayText = false
    let gameEndText;

    switch (gameState) {
        case 'won': {
            displayText = true
            gameEndText = 'You Won !!!'
            break
        }
        case 'lost': {
            displayText = true
            gameEndText = 'You Lost !!!'
            break
        }
        default: {
            displayText = false
            gameEndText = ''
            break
        }
    }

    return (
        <div className='gameEndText'>
            {
              displayText && <p>{gameEndText}</p>
            }
        </div>
    )
}

export default GameEnd
