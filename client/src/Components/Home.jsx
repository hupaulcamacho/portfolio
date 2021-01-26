
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import '../CSS/Home.css';

const descriptions = {
    'PROJECTS': {
        text: 'A collection of collaborative web applications and personal projects that I have developed.'
    },
    'ABOUT ME': {
        text: 'Who I am and where I come from.'
    },
    'SKILLS': {
        text: 'Programming languages and skills I have learned and mastered.'
    },
    'STREET FIGHTER': {
        text: "What's this?"
    }
};

function Home() {
    const [ description, setDescription ] = useState('Choose an option...');

    const handleMouseOver = (e) => {
        e.preventDefault();
        const category = e.target.innerText
        setDescription(descriptions[category].text)
    }

    return (
        <div className='home-main'>
            <NavBar 
                handleChange={handleMouseOver} 
            />
            <h1 className='my-name'>Hupaul Camacho</h1>
            <p className='my-description'>Full Stack Web Developer</p>
            <div className='description'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Home