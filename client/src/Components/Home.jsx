import React, { Component } from 'react'
import NavBar from './NavBar'
import '../CSS/Home.css'

class Home extends Component {
    render() {
        return (
            <div className='home-main'>
                <NavBar 
                    handleChange={this.props.handleChange} clearDescription={this.props.clearDescription}
                />
                <h1 className='my-name'>Hupaul Camacho</h1>
                <p className='my-description'>Full Stack Web Developer</p>
                <div className='description'>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Home
