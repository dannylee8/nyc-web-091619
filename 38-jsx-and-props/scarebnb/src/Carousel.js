import React from 'react'
import HouseCard from "./HouseCard"
import listings from './data'

class Carousel extends React.Component {

  renderListings(){
    return listings.map(listing => {
      return <HouseCard 
                {...listing}
              />
    })
  }


  render(){
    return (
      <div className="carousel">
        {this.renderListings()}
      </div>
    )
  }
}

export default Carousel