import React from 'react'
import Carousel from './Carousel'
import Banner from './Banner'
import Waiver from './Waiver'

class MainBody extends React.Component {

  state = {
    waiverSigned: false
  }

  signWaiver = () => {
    this.setState({
      waiverSigned: true
    })
  }

  render(){
    return (
      <div>
        {
            this.state.waiverSigned 
          ?
            <div>
              <Banner image="http://giphygifs.s3.amazonaws.com/media/IsectV8PqiuXe/giphy.gif"/>
              <Carousel />
            </div>  
          :
            <Waiver signWaiver={this.signWaiver} />
        }
      </div>
    )
  }
}

export default MainBody