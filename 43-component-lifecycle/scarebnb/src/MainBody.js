import React from 'react'
import Waiver from './Waiver'
import ListingIndex from './ListingIndex'
import NewListingForm from './NewListingForm'

class MainBody extends React.Component {

  state = {
    listings: [],
    loading: true,
    someObject: null
  }

  addListing = (listingFromDB) => {
    this.setState({
      listings: [...this.state.listings, listingFromDB]
    })
  }

  componentDidMount(){
    this.fetchListings()
  }

  fetchListings = () => {    
    fetch("http://localhost:3001/api/v1/listings")
    .then(res => res.json())
    .then(data => {
      this.setState({
        listings: data,
        loading: false,
        someObject: {id: 1, beef: "steak"}
      })

    })
  }

  renderMainBody = () => {
    switch(this.props.page){
      case "index":
        
        return <ListingIndex 
                  listings={this.state.listings}
                />  
      case "waiver":
        return <Waiver signWaiver={this.props.signWaiver} />
      case "new":
        return <NewListingForm addListing={this.addListing}/>
    }
  }

  render(){

    if (this.state.loading){
      return <h1>Loading...</h1>
    }

        
    return (
      <div>
        {
          this.renderMainBody()
        }
        {this.state.someObject.beef}
      </div>
    )
  }
}

export default MainBody