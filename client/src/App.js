import React, { Component } from 'react';
// import Popup from 'reactjs-popup'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact';

class App extends Component {
  state = {
    description: 'A collection of collaborative web applications and personal projects that I have developed.'
  }

  handleMouseOverChange = (e) => {
    e.preventDefault()
    const word = e.target.innerText
    console.log(word)
    if (word === 'PROJECTS') {
      this.setState({
        description: 'A collection of collaborative web applications and personal projects that I have developed.'
      })
    }
    if (word === 'ABOUT ME') {
      this.setState({
        description: 'Who I am and where I come from.'
      })
    }
    if (word === 'SKILLS') {
      this.setState({
        description: 'Programming languages and skills I have learned and mastered.'
      })
    }
    if (word === 'CONTACT') {
      this.setState({
        description: 'Contact and follow me through various social media platforms.'
      })
    }
  }

  // clearDescription = () => {
  //   this.setState({
  //     description: ''
  //   })
  // }
  renderHome = () => {
    const { description } = this.state
    return <Home 
      handleChange={this.handleMouseOverChange} 
      clearDescription ={this.clearDescription}
      description={description} 
      />
  } 

  render() {
    return (
        <div className="App">
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/skills' component={Skills} />
            <Route exact path='/projects/:projectname' component={Projects} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/' render={this.renderHome} />
          </Switch>
        </div>
    );
  }
} 

export default App;
