// @flow
import * as React from 'react'
import Pad from './Pad'
import sound1 from './assets/808 Bass A Overdrive .wav'
import sound2 from './assets/Clap 004.wav'
import sound3 from './assets/HiHat Closed 002 Ozone.wav'
import sound4 from './assets/HiHat Open 001.wav'
import sound5 from './assets/Kick 002 Knock.wav'
import sound6 from './assets/Kick 007 Noisy.wav'
import sound7 from './assets/Loading a Gun.wav'
import sound8 from './assets/Orchestra Hit 001 Revved.wav'
import sound9 from './assets/Snare 003.wav'

const sounds = [
  { name: '808 Bass', wav: sound1 },
  { name: 'Clap', wav: sound2 },
  { name: 'HiHat Closed', wav: sound3 },
  { name: 'HiHat Open', wav: sound4 },
  { name: 'Kick Knock', wav: sound5 },
  { name: 'Kick Noisy', wav: sound6 },
  { name: 'Loading Gun', wav: sound7 },
  { name: 'Orchestra Hit', wav: sound8 },
  { name: 'Snare', wav: sound9 },
]

class DrumPad extends React.Component {
  render () {
    const keyNames = [ 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    const pads = sounds.map((sound, i) => (
      <Pad
        key={i}
        id={keyNames[i]}
        src={sound.wav}
        name={sound.name}
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
