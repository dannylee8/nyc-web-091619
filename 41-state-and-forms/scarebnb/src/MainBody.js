import React from 'react'
import Waiver from './Waiver'
import ListingIndex from './ListingIndex'
import NewListingForm from './NewListingForm'

class MainBody extends React.Component {

  state = {
    listings: []
  }

  addListing = (listingFromDB) => {
    this.setState({
      listings: [...this.state.listings, listingFromDB]
    })
  }

  clickHandler = () => {    
    fetch("http://localhost:3001/api/v1/listings")
    .then(res => res.json())
    .then(data => {
      this.setState({
        listings: data
      })

    })
  }

  renderMainBody = () => {
    switch(this.props.page){
      case "index":
        return <ListingIndex 
                  listings={this.state.listings}
                  clickHandler={this.clickHandler}
                />  
      case "waiver":
        return <Waiver signWaiver={this.props.signWaiver} />
      case "new":
        return <NewListingForm addListing={this.addListing}/>
    }
  }

  render(){
    return (
      <div>
        {
          this.renderMainBody()
        }
      </div>
    )
  }
}

export default MainBody