import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import huey from '../Assets/huey.jpg'
import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin.png'
import movelist from '../Assets/movelist.jpg'

import '../CSS/About.scss'

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
                <div className='back-home-about'>
                    <Link to='/'>Back to Home</Link>
                </div>
                <div className="bio">
                    <img className="bio-img" src={stats.character}/>
                    <div className="more-info">
                        <div className='about-me'>{stats.profile}</div>
                        <img className='movelist' src={movelist}/>
                    </div>
                    <div className='links'>
                        <a href='https://github.com/hupaulcamacho'>
                            <div className='link-info'>
                                <img className='git' src={github}/>
                                <span className='link'>/hupaulcamacho</span>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/hupaulcamacho'>
                            <div className='link-info'>
                                <img className='in' src={linkedin}/>
                                <span className='link'>/hupaulcamacho</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
