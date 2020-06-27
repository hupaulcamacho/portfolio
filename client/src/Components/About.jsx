import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import huey from '../Assets/huey.jpg'
import movelist from '../Assets/movelist.jpg'

const stats = {
    name: 'Hupaul Camacho',
    profile: 'Born and raised in Brooklyn, NY, Hupaul is Full Stack Web Engineer specializing in Front End Development and CSS styling. He seeks to enhance learning and growth in the competitive fighting game scene. Spends time working on projects, gaming, and basketball. Also creates content on Youtube and streams on Twitch.',
    character: huey,
    specialmoves: [
        {
            name: "Hadouken"
        },
        {
            name: "Shoryuken"
        },
        {
            name: "Tatsumaki Senpukyaku"
        }
    ]
}

class About extends Component {
    
    render() {
        const moves = stats.specialmoves.map(move => 
            <p className='special-move'>{move.name}</p>
        )
        return (
            <div className='about-main'>
                <h1 className='page-title'>About Me</h1>
                <div className='back-home'>
                    <Link to='/'>Back to Home</Link>
                </div>
                <div className="bio">
                    <img className="bio-img" src={stats.character}/>
                    <div className="more-info">
                        <div className='about-me'><p>{stats.profile}</p></div>
                        <img className='movelist' src={movelist}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default About
