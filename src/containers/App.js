import React, { Component } from 'react';
import './App.css';
import Characters from './Characters';
import Films from './Films';
import Planets from './Planets';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Species from './Species';
import Chooser from '../components/Chooser';
import Scroll from '../components/Scroll';
import 'tachyons';

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
            return <Characters />;
            break;
          case 'Films':
            return <Films />;
            break;
          case 'Planets':
            return <Planets />;
            break;
          case 'Starships':
            return <Starships />;
            break;
          case 'Vehicles':
            return <Vehicles />;
            break;
          case 'Species':
            return <Species />;
            break;
          default:
          return (<div className='pa2'>
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
