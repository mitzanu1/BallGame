import actions from '../store/actions'

export const setDefaultValues = () => {

    actions.set('ball.inPlay', true)
    actions.set('ball.x', 20)
    actions.set('ball.y', 20)
    actions.set('pad.x', 40)
    actions.set('score', 0)
    actions.set('gameState', 'playing')
    actions.set('ball.directionX', 'right')
    actions.set('ball.directionY', 'down')

    actions.set('bricks', {
        b1: {x:5, y:5, inPlay:true, id:'b1'},
        b2: {x:17.5, y:5, inPlay:true, id:'b2'},
        b3: {x:30, y:5, inPlay:true, id:'b3'},
        b4: {x:42.5, y:5, inPlay:true, id:'b4'},
        b5: {x:55, y:5, inPlay:true, id:'b5'},
        b6: {x:67.5, y:5, inPlay:true, id:'b6'},
        b7: {x:80, y:5, inPlay:true, id:'b7'}
    })
}