import React from 'react'
import paddle from './Img/paddle.png'
import actions from '../store/actions'
import { useSelector } from 'react-redux'

const Pad = () => {

    const padX = useSelector(()=> actions.get('pad.x'))
    const padY = 95


    return (
        <div className='pad' 
             style={{
              backgroundImage: `url(${paddle})`,   
              top:`${padY}%`,
              left:`${padX}%`
             }}
           >
       </div>
    )
}

export default Pad
