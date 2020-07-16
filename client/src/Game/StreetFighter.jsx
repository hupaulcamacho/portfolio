import React, { Component } from 'react';
import Ryu from './Characters/Ryu';
import './StreetFighter.css'

class StreetFighter extends Component {
    state = {
        gameStarted: false,
    }

    loadCharacterSelect = () => {
        let characters = [
            {
                name: Ryu.name,
                image: Ryu.portrait
            }
        ]
    }

    startGame = () => {
        this.setState({
            gameStarted: true
        })
    }
    render() {
        const { gameStarted } = this.state
        return (
            <div className='street-fighter-main'>
                {gameStarted ?
                    (<div>
                        <h1>Street Fighter Web</h1>
                    </div>)
                    :
                    (<div>
                        <button onClick={this.startGame}>Start Game</button>
                    </div>)
                }
            </div>
        )
    }
}

export default StreetFighter