import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Images from './Images';
import Weather from './Weather';
import MayorMessage from './MayorMessage';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {

  render() {

    return (
        <Router>
              <div>
                <BootstrapNavBar />
                <div className="container main">
                    <Route path="/Home" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Images" render={()=>(
                        <Images images={atlImages} />
                    )} />
                    <Route path="/Weather" component={Weather} />
                    <Route path="/MayorMessage" component={MayorMessage} />
                </div>
              </div>
        </Router>
    );
  }
}

export default App;
