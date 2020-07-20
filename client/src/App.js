import React, { Component } from 'react';
// import Popup from 'reactjs-popup'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import StreetFighter from './Game/StreetFighter';

const descriptions = {
  'PROJECTS': {
      text: 'A collection of collaborative web applications and personal projects that I have developed.'
  },
  'ABOUT ME': {
      text: 'Who I am and where I come from.'
  },
  'SKILLS': {
      text: 'Programming languages and skills I have learned and mastered.'
  },
  'STREET FIGHTER': {
      text: "What's this?"
  }
}

class App extends Component {
  state = {
    description: 'Choose an option...'
  }

  handleMouseOverChange = (e) => {
    e.preventDefault()
    const category = e.target.innerText
    console.log(category)
    this.setState({ description: descriptions[category].text })
  }

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
            <Route path='/StreetFighter' component={StreetFighter} />
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
