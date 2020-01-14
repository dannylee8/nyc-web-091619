import React, { Fragment } from 'react'

function Banner(props) {
  return (
    <Fragment>
      <div></div>
      <div className="banner">
        <img className="banner-image" src={props.image} alt="banner"/>
      </div>
    </Fragment>
  )
}

export default Banner

// component folder