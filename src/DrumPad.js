// @flow
import * as React from 'react'
import Pad from './Pad'
import Sounds from './Sounds.js'



class DrumPad extends React.Component {
  state = {
    soundsArray: [ 3, 41, 31, 20, 24, 28, 32, 36, 40 ]
  }

  render () {
    const keyNames = [ 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    const pads = this.state.soundsArray.map((soundIndex, i) => (
      <Pad
        key={i}
        id={keyNames[i]}
        src={Sounds[soundIndex].sample}
        name={Sounds[soundIndex].name}
        updateDisplay={this.props.updateDisplay}
      />
    ))
    return (
      <div id="drum-container">
        {pads}
      </div>
    )
  }
}

export default DrumPad
