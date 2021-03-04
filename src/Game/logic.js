import actions from '../store/actions'

export const handleKeyDown = (e) => {
    if(e.key === 'a') actions.set('pad.direction', 'left')
    if(e.key === 'd') actions.set('pad.direction', 'right')
}

export const handleKeyUp = (e) => {
    if(e.key === 'a' || e.key === 'd') actions.set('pad.direction', 'stop')
}


const refreshRate = 10
const ballSpeed = .4
const padSpeed = .6

let gameInterval;

export const stopGame = () => clearInterval(gameInterval)
export const startGame = () => {
    clearInterval(gameInterval)
    gameInterval = setInterval(logic,refreshRate)
}


const logic = () => {
    
    const x = actions.get('ball.x')
    const y = actions.get('ball.y')
    const padX = actions.get('pad.x', 40)
    const bricks = actions.get('bricks', [])
    const score = actions.get('score')
    
    const ballDirectionX = actions.get('ball.directionX', 'right')
    const ballDirectionY = actions.get('ball.directionY', 'down')
    const padDirection = actions.get('pad.direction', 'stop')
    
    if (padDirection === 'left' && padX >= 0) actions.set('pad.x', padX - padSpeed)
    if (padDirection === 'right' && padX < 86) actions.set('pad.x', padX + padSpeed)
    
    if(x >= 95) actions.set('ball.directionX', 'left')
    if(x <= 0) actions.set('ball.directionX', 'right')
    if(y >= 85 && x > padX && x < padX + 11) actions.set('ball.directionY','up')
    if(y <= 0) actions.set('ball.directionY', 'down')
    if(y > 90) {
        actions.set('ball.inPlay', false)
        stopGame()
        actions.set('gameState', 'lost')
    }
    
    if (ballDirectionX === 'right') actions.set('ball.x', x + ballSpeed)
    if (ballDirectionX === 'left') actions.set('ball.x', x - ballSpeed)
    if (ballDirectionY === 'down') actions.set('ball.y', y + ballSpeed)
    if (ballDirectionY === 'up') actions.set('ball.y', y - ballSpeed)
    
    Object.values(bricks).forEach(brick => {
        if(x > brick.x && x < brick.x + 12.5 && y < brick.y + 10 && brick.inPlay) {
            actions.set('ball.directionY', 'down')
            // actions.set(`bricks.${brick.id}.inPlay`, false)
            actions.delete(`bricks.${brick.id}`)
            actions.set('score', score + 1)
        }
    })

    if(score >= 7) {
        stopGame()
        actions.set('gameState', 'won')
        actions.set('ball.inPlay', false)
    }
}











