import React, { Component } from 'react'
import Waiver from './Waiver'
import ListingIndex from './ListingIndex'
import NewListingForm from './NewListingForm'

import { Route, Switch, Redirect } from 'react-router-dom'


class MainBody extends Component {

  state = {
    listings: [],
    loading: true,
    number: 0
  }

  addListing = (listingFromDB) => {
    // setState can take

    // 1. An object
    // this.setState({
    //   listings: [...this.state.listings, listingFromDB]
    // })


    // 2. A function ding ding ding this is the right way
    this.setState(function(prevState){
      return {listings: [...prevState.listings, listingFromDB]}
    })


    // setState
    // rerenders the page
    // updates the state
    // asynchronous
  }

  addOne = () => {
    // this.setState({
    //   number: this.state.number + 1
    // })

    // this.setState({
    //   number: this.state.number + 1
    // })

    this.setState((prevState) => {return {number: prevState.number + 1}})

    this.setState((prevState) => {
      return {number: prevState.number + 1}
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

    const { renderListing, renderWaiver, renderNew, renderIndex, state } = this
    const { loading } = state

    if (loading){
      return <h1>Loading...</h1>
    }

        
    return (
      <div>
        <button onClick={this.addOne}>Add!!!!</button>
        <Switch>
          <Route path="/listing/:id" render={renderListing} />
          <Route path="/waiver" render={renderWaiver}/>
          <Route path="/new" render={renderNew} />
          <Route exact path="/" render={renderIndex} />
          <Route render={() => <h1>404 These are not the droids you are looking for</h1>}/>
        </Switch>
      </div>
    )
  }
}

export default MainBody