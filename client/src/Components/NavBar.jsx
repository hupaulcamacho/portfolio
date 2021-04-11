import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className='main-nav'>
                    <Link value='projects' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/projects'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='projects'>
                            PROJECTS
                        </div>
                    </Link>
                    {/* <Link value='about' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/about'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='about' >
                            ABOUT ME
                        </div>
                    </Link>
                    <Link value='skills' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/skills'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='skills' >
                            SKILLS
                        </div>
                    </Link> */}
                    {/* <Link value='street-fighter' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} to='/StreetFighter'>
                        <div className='selection' onMouseOver={this.props.handleChange} onMouseOut={this.props.clearDescription} value='street-fighter' >
                            STREET FIGHTER?
                        </div>
                    </Link> */}
                </nav>
            </div>
        )
    }
}

export default NavBar