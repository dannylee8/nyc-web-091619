import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

  const handleFilterChange = (e) => {
    props.changeFilter(e.target.value)
  }

  const handleSortChange = (e) => {
    props.changeSort(e.target.value)
  }

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>

      <div>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="greased">Greasy bois</option>
          <option value="not greased">Non-greasy bois</option>
        </select>

        <select onChange={handleSortChange}>
          <option value="unsorted">Unsorted</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
		</div>
	)
}

export default Nav
