import * as React from 'react'
import Sounds from './Sounds.js'

class SoundList extends React.Component {
  state = {
    color: 'white'
  }

  handleClick = (e) => {
    this.props.updateId(e.target.id)
    this.setState({ color: "red" })
  }

  render () {
    const list = Sounds.map((sound, i) => (
      <li
        key={i} 
        id={i}>{sound.name}
      </li>
    ))
    return (
      <div
        id="sound-list"
        onClick={(e)=> this.handleClick(e)}
        >
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default SoundList
