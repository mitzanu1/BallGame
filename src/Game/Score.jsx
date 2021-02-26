import React from 'react'
import actions from '../store/actions'
import { useSelector } from 'react-redux'

const Score = () => {

    const score = useSelector(()=>actions.get('score'))

    return (
            <p className='scoreText'>Score: {score}</p>
    )
}

export default Score
