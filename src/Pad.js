// @flow
import * as React from 'react'

function getRandomColor(section) {
  let results = [];
  let counter = 3;
  let min;
  let max;
  if(section === 'inside') {
    min = 128
    max = 256
  } else {
    min = 0;
    max = 128;
  }

  while (counter--) {
    min = Math.ceil(min);
    max = Math.floor(max);
    results.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return  `rgb(${results})`
}

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

  handlePointerEnter = (e) => {
    let color = [];
    color.push(getRandomColor('inside'))
    color.push(getRandomColor('outside'))
    e.target.style.background = `radial-gradient(${color})`
  }

  handlePointerLeave = (e) => {
    e.target.style = { 'animation' : '3s fade' };
  }

  render () {
    return (
      <div
        className="drum-pad"
        id={this.props.name}
        onClick={this.playSample}
        onPointerEnter={this.handlePointerEnter}
        onPointerLeave={this.handlePointerLeave}
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
