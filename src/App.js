import React, { Component } from 'react';
import './App.css';
import Chooser from './Chooser'
import Scroll from './Scroll';

class App extends Component {
  constructor(){
    super();
    this.state = {dropdown: ''}
  }
  
  onDropdownChange = (event) => {
    this.setState({ dropdown: event.target.value })
    console.log(this.state);
    
  }

  render() {
    return (
      <div className="App">
      <h1> StarWars API Viewer </h1>
      <Chooser dropChange={this.onDropdownChange} />
      <Scroll>

      </Scroll>
      </div>
    );
  }
}

export default App;
