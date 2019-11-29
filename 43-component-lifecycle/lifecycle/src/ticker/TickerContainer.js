import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    value: 0
  }

  updateTickerValue = () => {
    this.setState({
      value: Math.floor(Math.random()*1000)
    })
  }

  componentDidMount(){
    // when starting app, let's start a timer
    this.interval = setInterval(this.updateTickerValue, 1000)
  }

  stopTicker = () => {
    clearInterval(this.interval)
  }
 
  render(){
    return (
      <div className="box">
        <button onClick={this.stopTicker} >Stop Ticker</button>
        <Ticker value={this.state.value}/>
      </div>
    );
  }
}



export default TickerContainer