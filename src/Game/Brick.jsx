import React from 'react'
import actions from '../store/actions'
import { useSelector } from 'react-redux'
import brickimg from './Img/brick.png'

const Brick = () => {


    const bricks = useSelector(()=>actions.get('bricks', {}))

    return (
        <>
            {
                Object.values(bricks).map((brick)=> {
                    const {x, y, inPlay, id} =  brick
                    return (
                        inPlay && <div className='brick' key={id}
                           style={{
                               backgroundImage: `url(${brickimg})`,
                               top:`${y}%`,
                               left:`${x}%`
                            }}>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Brick
