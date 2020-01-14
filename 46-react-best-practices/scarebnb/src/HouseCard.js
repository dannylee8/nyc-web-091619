import React from 'react'

function HouseCard (props) {

  const { name, image, beef } = props

  return (
    <div className = "house-card">
      <div className="image-wrapper">
        <img className="image" alt={name} src={image}/>
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default HouseCard

// component folder