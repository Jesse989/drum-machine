// @flow
import * as React from 'react'

class Display extends React.Component {
  render () {

    return (
      <div id="display">
        <h1>{this.props.soundString}</h1>
      </div>
    )
  }
}

export default Display
