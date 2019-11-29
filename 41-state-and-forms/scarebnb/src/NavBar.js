import React from 'react'
import SearchForm from './SearchForm'

class NavBar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <img className="logo" src="https://www.clipartwiki.com/clipimg/full/15-157064_haunted-house-icon.png" alt="logo"/>
        <SearchForm/>
        <button onClick={this.props.showNewForm}>New Listing!</button>
      </div>
    )
  }
}

export default NavBar