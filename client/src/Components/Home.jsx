import React, { Component } from 'react'
import NavBar from './NavBar'
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
                    {this.props.description}
                </div>
            </div>
        )
    }
}

export default Home
