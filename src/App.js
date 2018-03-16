import React, { Component } from 'react';
import './App.css';
import Characters from './Characters';
import Chooser from './Chooser';
import Scroll from './Scroll';

class App extends Component {
  constructor(){
    super();
    this.state = {dropdown: 'default'}
  }
  
  onDropdownChange = (event) => {
    this.setState({ dropdown: event.target.value })
    
  }
viewChanger = () => {
  switch (this.state.dropdown) {
          case 'Characters':
            return <Characters />
        
          default:
          return (<div>
            <h1>Please make a selection</h1>
            </div> )
        }}

  render() {
    return (
      <div className="App">
      <h1> StarWars API Viewer </h1>
      <Chooser dropChange={this.onDropdownChange} />
      <Scroll>
        {this.viewChanger()}
      </Scroll>
      </div>
    );
  }
}

export default App;
