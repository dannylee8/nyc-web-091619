import React from 'react'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <Link className="logo-link" to="/" >
          <img className="logo" src="https://www.clipartwiki.com/clipimg/full/15-157064_haunted-house-icon.png" alt="logo"/>
        </Link>
        <SearchForm/>
        <Link to="/new">
          <button>New Listing!</button>
        </Link>
      </div>
    )
  }
}

export default NavBar