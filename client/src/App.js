import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import StreetFighter from './Game/StreetFighter';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const imgs = [
      './Assets/ryu_char_select.png',
      './Assets/ken_char_select.png',
      './Assets/bison_char_select.png'
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false)
  }

  const renderProjects = () => {
    return <Projects isLoading={isLoading} />
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/StreetFighter' component={StreetFighter} />
        <Route path='/skills' component={Skills} />
        <Route exact path='/projects/:projectname' component={Projects} />
        <Route path='/projects' render={renderProjects} />
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
} 

export default App;
