import React from 'react'
import actions from '../store/actions'
import { useSelector } from 'react-redux'

const Ball = () => {


    const y = useSelector(()=> actions.get('ball.y'))
    const x = useSelector(()=> actions.get('ball.x'))

    const displayBall = useSelector(()=>actions.get('ball.inPlay', true))


    return (
        displayBall && <div className='ball'
                  style={{
                   top:`${y}%`,
                   left:`${x}%`,
                  }}
                > 
        </div>
                     
       
    )
}

export default Ball
