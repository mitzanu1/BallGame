import React, { useState, useEffect } from 'react'
import './style.css'
import background from './Img/background.png'
import Ball from './Ball'
import Pad from './Pad'
import Brick from './Brick'
import Score from './Score'
import GameEnd from './GameEnd'
import { handleKeyDown, handleKeyUp, startGame, stopGame } from './logic.js'
import Button from 'react-bootstrap/Button'
import { setDefaultValues } from './defaultValues.js'

function BallGame() {

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)
        setDefaultValues()
    },[])
    
    const handleRestart = () => {
        stopGame()
        setDefaultValues()
    }

    return (
    <div className='gameContainer'>
        <div className='gamebox'
             style={{
                backgroundImage: `url(${background})`
             }}
        >
            <Ball/> 
            <Pad/> 
            <Brick/> 
            <GameEnd/>
        </div>
        <div className='bottom'> 
            <div className='buttons'>
                <Button size='sm' onClick={startGame}>Start</Button>{' '}
                <Button size='sm' onClick={stopGame}>Stop</Button>{' '}
                <Button size='sm' onClick={handleRestart}>Replay</Button>
            </div>
            <div className='score'>
                <Score/>
            </div>
        </div>
    </div>
    )
}

export default BallGame
