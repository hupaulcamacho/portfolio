import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className='main-nav'>
                    <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='projects' >
                        <Link value='projects' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/projects'>PROJECTS</Link>
                    </div>
                    <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='about' >
                        <Link value='about' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/about'>ABOUT ME</Link>
                    </div>
                    <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='skills' >
                        <Link value='about' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/skills'>SKILLS</Link>
                    </div>
                    <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='social-media' >
                        <Link value='about' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/socialmedia'>SOCIAL MEDIA</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar