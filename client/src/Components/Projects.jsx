import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";

import handmedown from '../Assets/handmedown.png'
import watchlist from '../Assets/watchlist.png'
import innercircle from '../Assets/innercircle.png'
import behance from '../Assets/behance.png'
import ryu from '../Assets/ryu_char_select.png'
import ken from '../Assets/ken_char_select.png'
import sakura from '../Assets/sakura_char_select.png'
import chun from '../Assets/chun_li_char_select.png'

const projects = [
    {
        title: 'Hand Me Down',
        description: 'A social media engagement project to promote sustainablity in the fashion industry',
        imgUrl: handmedown,
        repo: 'https://github.com/PeterFiorentino/HandMeDown',
        live: 'https://handmedown.herokuapp.com/'
    },
    {
        title: 'Watchlist',
        description: 'A web app where users can post, comment on, and favorite TV shows that they are binging on.',
        imgUrl: watchlist,
        repo: 'https://github.com/hupaulcamacho/h_camacho_technical_assessment',
    },
    {
        title: 'Inner Circle',
        description: 'A social media web app where users can create circles of friends with similar interests.',
        imgUrl: innercircle,
        repo: 'https://github.com/hupaulcamacho/inner-circle-app',  
    },
    {
        title: 'Uniqlo Posters',
        description: 'A web app where users can post, comment on, and favorite TV shows that they are binging on.',
        imgUrl: behance,
        repo: 'https://www.behance.net/h_camacho', 
    }
];

class Projects extends Component {
    state = {
        title: '',
        selectedCharacter: null
    }
    handleMouseOver = (e) => {
        e.preventDefault()
        const imageName = e.target.dataset.name
        console.log(imageName)
        if(imageName === projects[0].title) {
            this.setState({
                title: imageName,
                selectedCharacter: ryu
            })
        }
        if(imageName === projects[1].title) {
            this.setState({
                title: imageName,
                selectedCharacter: ken
            })
        }
        if(imageName === projects[2].title) {
            this.setState({
                title: imageName,
                selectedCharacter: sakura
            })
        }
        if(imageName === projects[3].title) {
            this.setState({
                title: imageName,
                selectedCharacter: chun
            })
        }
    }
    handleMouseOut = () => {
        this.setState({
            title: '',
            selectedCharacter: null
        })
    }

    render() {
        const { title, selectedCharacter } = this.state
        const projectElements = []
        projects.forEach(project => {
            projectElements.push(
                <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className='character' src={project.imgUrl} data-name={project.title} />
            )
        })
        return (
            <div>
                {selectedCharacter ? (
                <div className='project-main'>
                    <h1 className='projects-select'>Projects Select</h1>
                    <h1 className='project-title'>{title}</h1>
                    <img className='char-portrait' src={selectedCharacter} />
                    <div className='project-container'>
                        {projectElements}
                    </div>
                    <div className='back-home'>
                        <Link to='/'>Back to Home</Link>
                    </div>
                </div>
                ) : (
                <div className='project-main'>
                    <h1 className='projects-select'>Projects Select</h1>
                    <h1 className='project-title'>{title}</h1>
                    <div className='project-container'>
                        {projectElements}
                    </div>
                    <div className='back-home'>
                        <Link to='/'>Back to Home</Link>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default Projects
