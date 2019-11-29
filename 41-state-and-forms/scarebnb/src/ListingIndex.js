import React from 'react'
import Carousel from './Carousel'
import Banner from './Banner'

class ListingIndex extends React.Component {
  
  render(){
    return (
      <div>
        <Banner image="http://giphygifs.s3.amazonaws.com/media/IsectV8PqiuXe/giphy.gif"/>
        <Carousel 
          listings={this.props.listings}
          clickHandler={this.props.clickHandler}
        />
      </div> 
    )
  }
}

export default ListingIndex