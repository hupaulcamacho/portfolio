import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const stats = {
    name: 'Hupaul Camacho',
    age: 25,
    height: "5'10",
    weight: '203 lbs',
    eyes: 'dark brown',
    bio: 'Born and raised in Brooklyn, NY, Hupaul is an aspiring digital artist and Full Stack Web Engineer.',

}

class About extends Component {
    render() {
        return (
            <div className='about-main'>
                <h1 className='page-title'>About Me</h1>
                <p></p>
                <div className='back-home'>
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default About
