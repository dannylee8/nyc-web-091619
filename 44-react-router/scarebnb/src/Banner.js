import React from 'react'

class Banner extends React.Component {
  render(){
    return (
      <div className="banner">
        <img className="banner-image" src={this.props.image} alt="banner"/>
      </div>
    )
  }
}

export default Banner