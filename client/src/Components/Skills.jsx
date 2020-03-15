import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Skills extends Component {
    state = {
        title: '',
        description: ''
    }

    handleMouseOver = (e) => {
        e.preventDefault()
        const imageName = e.target.dataset.name
        console.log(imageName)
        if(imageName === 'react') {
            this.setState({
                description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
            })
        }
        if(imageName === 'js') {
            this.setState({
                description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
            })
        }
        if(imageName === 'html') {
            this.setState({
                description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
            })
        }
        if(imageName === 'css') {
            this.setState({
                description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
            })
        }
        if(imageName === 'github') {
            this.setState({
                description: 'GitHub, Inc. is a US-based global company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for US$7.5 billion. It offers the distributed version control and source code management functionality of Git, plus its own features.'
            })
        }
        if(imageName === 'adobe') {
            this.setState({
                description: 'Adobe Inc., known until October 3, 2018 as Adobe Systems Incorporated, is an American multinational computer software company headquartered in San Jose, California. It has historically focused upon the creation of multimedia and creativity software products, with a more recent foray towards digital marketing software.'
            })
        }
        if(imageName === 'git') {
            this.setState({
                description: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.'
            })
        }
    }
    handleMouseOut = () => {
        this.setState({
            description: ''
        })
    }
    render() {
        const { description } = this.state
        return (
            <div className='skills-main'>
                <h1 className='page-title'>Skills</h1>
                <div className='icons'>
                    <i className='icon' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-name='react' class="fab fa-react" ></i>
                    <i className='icon' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-name='js' class="fab fa-js-square"></i>
                    <i className='icon' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-name='html' class="fab fa-html5"></i>
                    <i className='icon' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-name='css' class="fab fa-css3-alt"></i>
                    <i className='icon' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-name='github' class="fab fa-github"></i>
                    <i className='icon' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-name='adobe' class="fab fa-adobe"></i>
                    <i className='icon' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-name='git' class="fab fa-git-alt"></i>
                </div>
                <div className='skill-description'>
                    {description}
                </div>
                <div className='back-home'>
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default Skills