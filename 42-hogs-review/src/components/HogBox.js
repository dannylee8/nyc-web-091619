import React from 'react'
import HogTile from './HogTile'

class HogBox extends React.Component {

  renderTiles = () => {
    return this.props.hogs.map(hog => {
      return <HogTile {...hog}/>
      // return <HogTile name={hog.name} greased={hog.greased} so on so forth/>
    })
  }

  render(){
    return (
      <div className="ui grid container">{this.renderTiles()}</div>
    )
  }
}

export default HogBox