import React from 'react'
import HouseCard from "./HouseCard"
// import listings from './data'

class Carousel extends React.Component {

  // constructor(){
  //   super()

  //   this.state = {
  //     listings: [],
  //     beef: "steak"
  //   }

  //   this.clickHandler = this.clickHandler.bind(this)
  // }

  // // initialize state
  state = {
    listings: [],
    beef: "steak"
  }

  renderListings(){
    return this.state.listings.map(listing => {
      return <HouseCard
                key={listing.id} 
                {...listing}
              />
    })
  }

  clickHandler = () => {    
    fetch("http://localhost:3001/api/v1/listings")
    .then(res => res.json())
    .then(data => {

      // change what's in state
      // want to rerender the page

      // this is called mutating state directly
      // this.state.listings = data
      // this.forceUpdate()
      this.setState({
        listings: data
      })

    })
  }


  render(){
    return (
      <div className="carousel">
        <button onClick={this.clickHandler}>Fetch Listings</button>
        {this.renderListings()}
      </div>
    )
  }
}

export default Carousel