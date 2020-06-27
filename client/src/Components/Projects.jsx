import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import Popup from "reactjs-popup";

import handmedown from '../Assets/handmedown.png'
import handmedownV from '../Assets/handmedown720.mov'

import watchlist from '../Assets/watchlist.png'
import watchlistV from '../Assets/watchlist720.mov'

import remotetheater from '../Assets/remotetheater.png'
import remotetheaterV from '../Assets/remotetheater.mov'

import behance from '../Assets/behance.png'
import ryu from '../Assets/ryu_char_select.png'
import ken from '../Assets/ken_char_select.png'
import bison from '../Assets/bison_char_select.png'

const projects = [
    {
        title: 'Hand Me Down',
        description: 'A social media engagement project to promote sustainablity in the fashion industry',
        imgUrl: handmedown,
        videoURL: handmedownV,
        repo: 'https://github.com/PeterFiorentino/HandMeDown',
        live: 'https://handmedown.herokuapp.com/'
    },
    {
        title: 'Watchlist',
        description: 'A web app where users can post, comment on, and favorite TV shows that they are binging on.',
        imgUrl: watchlist,
        videoURL: watchlistV,
        repo: 'https://github.com/hupaulcamacho/h_camacho_technical_assessment',
    },
    {
        title: 'Remote Theater',
        description: 'This application allows users to watch movies as if they were in a real movie theater. Interact with other users live as the movie is playing, as well as setting preferences',
        imgUrl: remotetheater,
        videoURL: remotetheaterV,
        repo: 'https://github.com/hupaulcamacho/remote-theater',
        live: 'https://remotetheater.herokuapp.com/'

    }
];

class Projects extends Component {
    state = {
        title: '',
        description: '',
        selectedCharacter: null,
        videoURL: null,
        characters: {
            ryu: ryu,
            ken: ken,
            bison: bison
        },
        repoURL: null,
        liveURL: null
    }
    handleMouseOver = (e) => {
        e.preventDefault()
        const { characters } = this.state
        const imageName = e.target.dataset.name
        console.log(imageName)
        if(imageName === 'Hand Me Down') {
            this.setState({
                title: imageName,
                description: projects[0].description,
                selectedCharacter: characters.ryu,
                videoURL: projects[0].videoURL,
                repoURL: projects[0].repo,
                liveURL: projects[0].live
            })
        }
        if(imageName === 'Watchlist') {
            this.setState({
                title: imageName,
                description: projects[1].description,
                selectedCharacter: characters.ken,
                videoURL: projects[1].videoURL,
                repoURL: projects[1].repo
            })
        }
        if(imageName === 'Remote Theater') {
            this.setState({
                title: imageName,
                description: projects[2].description,
                selectedCharacter: characters.bison,
                videoURL: projects[2].videoURL,
                repoURL: projects[2].repo,
                liveURL: projects[2].live
            })
        }
    }

    renderImg = () => {
        const { selectedCharacter } = this.state
        return <img key={selectedCharacter} className='char-portrait' src={selectedCharacter} />
    }

    renderVid = () =>  {
        const { videoURL, title, description, repoURL, liveURL } = this.state
        return <Popup trigger={
            <ReactPlayer key={title} className='project-video' width='90%' height='90%' url={videoURL} playing />
        } modal closeOnDocumentClick>
      
            <ReactPlayer key={title} className='video-preview' width='90%' height='90%' url={videoURL} playing />
            <div className='caption'>
                {description}
                <div>
                    <a href={repoURL} target="_blank">
                        <button>Repo</button>
                    </a>
                    <a href={liveURL}target="_blank">
                        <button>Live</button>
                    </a>
                </div>
            </div>
            
        </Popup>
    }

    render() {
        const { title, selectedCharacter, videoURL } = this.state
        const projectElements = []
        projects.forEach(project => {
            projectElements.push(
                <img onMouseOver={this.handleMouseOver} className='character' src={project.imgUrl} data-name={project.title} />
            )
        })
        return (
            <div>
                {selectedCharacter ? (
                <div className='project-main'>
                    <h1 className='projects-select'>Projects Select</h1>
                    <h1 className='project-title'>{title}</h1>
                    {this.renderImg()}
                    <div className='project-container'>
                        {projectElements}
                    </div>
                    <div className='back-home'>
                        <Link to='/'>Back to Home</Link>
                    </div>
                    
                    {this.renderVid()}
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
