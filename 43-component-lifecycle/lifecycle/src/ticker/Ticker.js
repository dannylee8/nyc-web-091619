import React from 'react'

class Ticker extends React.Component {

  state = {
    color: "black"
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps.value)
  //   return Math.abs(nextProps.value - this.props.value) > 5
  // }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.value > this.props.value){
      this.setState({
        color: "red"
      })
    } else if (prevProps.value < this.props.value){
      this.setState({
        color: "green"
      })
    }
  }

  render(){
    return (
      <div className="box" style={{color: this.state.color}}>
        <div>
          <h1>{this.props.value}</h1>
        </div>
      </div>
    );
  }
}

export default Ticker