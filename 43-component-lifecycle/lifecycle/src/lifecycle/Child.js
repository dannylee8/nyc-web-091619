import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {

  // constructor(props){
  //   super()
  //   console.log("CONSTRUCTOR", props.name)
  // }

  startInterval = () => {
    this.interval = setInterval(() => console.log("BOING!"), 1000)
  }

  componentDidMount(){
    // it is only called ONCE while the component is still on the page

    // used for initial fetches
    // initializing outside libraries
    // custom event listeners
    // setting intervals

    console.log("DID MOUNT", this.props.name)
    // console.log("DID MOUNT", this.props.state)

    this.startInterval()
  }


  componentWillUnmount(){
    console.log("UNMOUNTING", this.props.name)

    clearInterval(this.interval)
  }

  render(){
    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}

export default Child