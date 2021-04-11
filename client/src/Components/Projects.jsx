import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

import handmedown from '../Assets/handmedown.png';
import handmedownV from '../Assets/handmedown720.mov';

import watchlist from '../Assets/watchlist.png';
import watchlistV from '../Assets/watchlist720.mov';

import remotetheater from '../Assets/remotetheater.png';
import remotetheaterV from '../Assets/remotetheater720.mov';

import ryu from '../Assets/ryu_char_select.png';
import ken from '../Assets/ken_char_select.png';
import bison from '../Assets/bison_char_select.png';

import '../CSS/Projects.scss'

const projects = {
    'Hand Me Down': {
        title: 'Hand Me Down',
        character: ryu,
        description: 'A social media engagement project to promote sustainablity in the fashion industry. Utilizes QR codes to allow users to save stories of their memories made while wearing a piece of clothing, before handing that clothing down to someone else or donating it. ',
        imgUrl: handmedown,
        videoURL: handmedownV,
        repo: 'https://github.com/hupaulcamacho/HandMeDown',
        live: 'https://handmedown.herokuapp.com/'
    },
    'Watchlist': {
        title: 'Watchlist',
        character: ken,
        description: 'A web app where users can post, comment on, and favorite TV shows that they are binging on.',
        imgUrl: watchlist,
        videoURL: watchlistV,
        repo: 'https://github.com/hupaulcamacho/watchlist',
        live: ""
    },
    'Remote Theater': {
        title: 'Remote Theater',
        character: bison,
        description: 'This application allows users to watch movies as if they were in a real movie theater. Interact with other users live as the movie is playing, as well as setting preferences',
        imgUrl: remotetheater,
        videoURL: remotetheaterV,
        repo: 'https://github.com/hupaulcamacho/remote-theater',
        live: 'https://remotetheater.herokuapp.com/'
    }
}


class Projects extends Component {
    state = {
        project: projects['Hand Me Down'],
    }

    handleMouseOver = (e) => {
        e.preventDefault()
        const imageName = e.target.dataset.name

        this.setState({
            project: projects[imageName]
        })
    }

    renderImg = () => {
        const { project } = this.state
        return <img key={project.character} className='char-portrait' src={project.character} />
    }

    render() {
        const { project } = this.state
        const isLoading = this.props.isLoading
        console.log(isLoading)
        return (
            
            <div className='project-main'>
                {isLoading
                ?
                <div className='spinner-div'>
                    <span class='spinner'></span>
                </div>
                :
                <>
                    <h1 className='projects-select'>{project.title}</h1>
                    <h1 className='project-title'>Select a Project</h1>
                    {this.renderImg()}
                    <div className='project-container'>

                        <img
                            onMouseOver={this.handleMouseOver}
                            className='character'
                            src={projects['Hand Me Down'].imgUrl}
                            data-name={projects['Hand Me Down'].title}
                        />
                        <img
                            onMouseOver={this.handleMouseOver}
                            className='character'
                            src={projects['Watchlist'].imgUrl}
                            data-name={projects['Watchlist'].title}
                        />
                        <img
                            onMouseOver={this.handleMouseOver}
                            className='character'
                            src={projects['Remote Theater'].imgUrl}
                            data-name={projects['Remote Theater'].title}
                        />

                    </div>
                    <div className='back-home-projects'>
                        <Link to='/'>Back to Home</Link>
                    </div>

                    <div className='project-video'>
                        <ReactPlayer key={project.title} className='video-preview' url={project.videoURL} playing />
                        <div className='caption'>
                            {project.description}
                            <div>
                                <a href={project.repo} target="_blank">
                                    <button className='repo'>Repo</button>
                                </a>
                                <a href={project.live} target="_blank">
                                    <button className='live'>Live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
                }
                
            </div>
        )
    }
}

export default Projects
