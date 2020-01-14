import React from 'react'
import HouseCard from "./HouseCard"

function Carousel (props) {

  const renderListings = () => {
    return props.listings.map(listing => {
      return <HouseCard
                key={listing.id} 
                {...listing}
              />
    })
  }

  return (
    <div className="carousel">
      {renderListings()}
    </div>
  )
}

export default Carousel

// component folder