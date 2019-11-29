import React from 'react'
import Waiver from './Waiver'
import ListingIndex from './ListingIndex'
import NewListingForm from './NewListingForm'

import { Route, Switch, Redirect } from 'react-router-dom'


class MainBody extends React.Component {

  state = {
    listings: [],
    loading: true
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
        loading: false
      })

    })
  }

  renderWaiver = (routerProps) => {
    return <Waiver 
              signWaiver={this.props.signWaiver} 
              routerProps={routerProps}
            />
  }

  renderIndex = () => {
    console.log(this.props.signed)
    if (this.props.signed){
      return <ListingIndex listings={this.state.listings} />
    } else {
      return <Redirect to="/waiver"/>
    }
    
  }

  renderNew = () => {
    if (this.props.signed){
      return  <NewListingForm addListing={this.addListing}/>
    } else {
      return <Redirect to="/waiver"/>
    }
  }

  renderListing = (routerProps) => {
    const urlId = parseInt(routerProps.match.params.id)

    const foundListing = this.state.listings.find(listing => listing.id === urlId)

    if (foundListing){
      return <h1> {foundListing.name} </h1>
    } else {
      return <Redirect to="/" />
    }
  }

  render(){

    if (this.state.loading){
      return <h1>Loading...</h1>
    }

        
    return (
      <div>
        <Switch>
          <Route path="/listing/:id" render={this.renderListing} />
          <Route path="/waiver" render={this.renderWaiver}/>
          <Route path="/new" render={this.renderNew} />
          <Route exact path="/" render={this.renderIndex} />
          <Route render={() => <h1>404 These are not the droids you are looking for</h1>}/>
        </Switch>
      </div>
    )
  }
}

export default MainBody