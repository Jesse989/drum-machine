// @flow
import * as React from 'react'

class Pad extends React.Component {
  componentDidMount () {
    document.addEventListener('keydown', (e)=> {
      if (e.key.toUpperCase() === this.props.id) {
        this.playSample();
      }
    })
  }

  playSample = () => {
	  const clip = document.getElementById(this.props.id)
    clip.currentTime = 0
    clip.play()
    this.props.updateDisplay(this.props.name)
  }

  render () {
    return (
      <div
        className="drum-pad"
        id={this.props.name}
        onClick={this.playSample}
      >
        <audio
          className="clip"
          src={this.props.src}
          id={this.props.id}
        />
        <p>{this.props.id}</p>
      </div>
    )
  }
}

export default Pad
