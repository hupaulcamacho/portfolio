import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Skills.css'
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
                    <div className='icon-holder'>
                        <i className='icon' key='react' onMouseOver={this.handleMouseOver} data-name='react' class="fab fa-react" ></i>
                        React
                    </div>
                    <div className='icon-holder'>
                        <i className='icon' key='js' onMouseOver={this.handleMouseOver} data-name='js' class="fab fa-js-square"></i>
                        Javascript
                    </div>
                    <div className='icon-holder'>
                        <i className='icon' key='html' onMouseOver={this.handleMouseOver} data-name='html' class="fab fa-html5"></i>
                        HTML
                    </div>
                    <div className='icon-holder'>
                        <i className='icon' key='css' onMouseOver={this.handleMouseOver} data-name='css' class="fab fa-css3-alt"></i>
                        CSS
                    </div>
                    <div className='icon-holder'>
                        <i className='icon' key='github' onMouseOver={this.handleMouseOver} data-name='github' class="fab fa-github"></i>
                        Github
                    </div>
                    <div className='icon-holder'>
                        <i className='icon' key='adobe' onMouseOver={this.handleMouseOver} data-name='adobe' class="fab fa-adobe"></i>
                        Adobe
                    </div>
                    <div className='icon-holder'>
                        <i className='icon' key='git' onMouseOver={this.handleMouseOver} data-name='git' class="fab fa-git-alt"></i>
                        Git
                    </div>
                </div>
                <div className='skill-description'>
                    {description}
                </div>
                <div className='back-home-skills'>
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default Skills