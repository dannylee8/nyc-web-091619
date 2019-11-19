import React from 'react'

class SearchForm extends React.Component {
  render(){
    return (
      <div>
        <form>
          <input placeholder="Search for a scare..."/>
          <input type='submit' value="Search"/>
        </form>
      </div>
    )
  }
}

export default SearchForm