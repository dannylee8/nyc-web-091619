import React from 'react'
import Carousel from './Carousel'
import Banner from './Banner'
import Waiver from './Waiver'

class MainBody extends React.Component {
  render(){
    return (
      <div>
        <Waiver />
        <div>
          <Banner image="http://giphygifs.s3.amazonaws.com/media/IsectV8PqiuXe/giphy.gif"/>
          <Carousel />
        </div>
      </div>
    )
  }
}

export default MainBody