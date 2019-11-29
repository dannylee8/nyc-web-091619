import React from 'react'
import HouseCard from "./HouseCard"

class Carousel extends React.Component {

  renderListings(){
    return this.props.listings.map(listing => {
      return <HouseCard
                key={listing.id} 
                {...listing}
              />
    })
  }

  render(){
    return (
      <div className="carousel">
        <button onClick={this.props.clickHandler}>Fetch Listings</button>
        {this.renderListings()}
      </div>
    )
  }
}

export default Carousel