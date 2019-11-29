import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogBox from './HogBox'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    filter: "all", // "greased", "not greased",
    sortValue: "unsorted" // "unsorted" "name" "weight"
  }

  // changeFilter("greased")
  // changeFilter("not greased")
  changeFilter = (newFilter) => {
    this.setState({
      filter: newFilter
    })
  }

  changeSort = (newSortVal) => {
    this.setState({
      sortValue: newSortVal
    })
  }

  hogsToRender = () => {
    // return an array of hogs that should be rendered
    let filteredHogs;

    switch(this.state.filter){
      case "greased":
        // do greasy things
        filteredHogs = hogs.filter((hog) => {
          return hog.greased
        })
        break;
      case "not greased":
        // do non greasy things
        filteredHogs = hogs.filter((hog) => {
          return !hog.greased
        })
        break;
      case "all":
        // do all things
        filteredHogs = hogs
        break;
    }

    let sortedHogs;

    switch(this.state.sortValue){
      case "name":
        sortedHogs = [...filteredHogs].sort((hogA, hogB) => {
          if (hogA.name > hogB.name){
            return 1
          } else if(hogA.name < hogB.name){
            return -1
          } else {
            return 0
          }
        })
        break;
      case "weight":
        sortedHogs = [...filteredHogs].sort((hogA, hogB) => {
          return hogB.weight - hogA.weight
        })
        break;
      case "unsorted":
        // do all things
        sortedHogs = filteredHogs
        break;
    }


    return sortedHogs

  }

  render() {

    return (
      <div className="App">
          <Nav changeFilter={this.changeFilter} changeSort={this.changeSort} />
          <HogBox hogs={this.hogsToRender()} />
      </div>
    )
  }
}

export default App;
