import React from 'react'
import Child from './Child'

class Parent extends React.Component {

  state = {
    yes: true
  }

  toggle = () => {
    this.setState({
      yes: !this.state.yes
    })
  }

  // constructor(props){
  //   super()
  //   console.log("CONSTRUCTOR", props.name)
  // }

  
  // static getDerivedStateFromProps(props, state){
  //   // return an object that will add values to state
  //   return {}
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps.name !== this.props.name
  // }

  // componentDidUpdate(prevProps, prevState){
  //   console.log("DID UPDATE", this.props.name)
  //   this.setState()
  // }


  render(){
    return (
      <div className="box">
        <button onClick={this.toggle}>Click</button>
        <p>Parent</p>
        {this.state.yes ? <Child name="child"/> : null }
      </div>
    );
    
  }
}

export default Parent


// Constructor parent
// Render parent
// Constructor child
// Render child
// Constructor grandchild
// Render grandchild
// Did mount grandchild
// Did mount child
// Did mount parent








