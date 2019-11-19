import React from 'react'

class HouseCard extends React.Component {
  render(){
    console.log(this.props)

    return (
      <div className = "house-card">
        <div className="image-wrapper">
          <img className="image" src={this.props.image}/>
        </div>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default HouseCard