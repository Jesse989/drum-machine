import React, { Component } from 'react';
import './App.css';
import DrumPad from './DrumPad'
import Display from './Display'

class App extends Component {
  state = {
    soundString: 'Drum Pad'
  }
  updateDisplay = (newSoundString) => {
    this.setState({
      soundString: newSoundString
    })
  }

  render() {
    return (
      <div id="drum-machine">
        <Display soundString={this.state.soundString}/>
        <DrumPad updateDisplay={this.updateDisplay}/>
      </div>
    );
  }
}

export default App;
