import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import MainBody from './MainBody'

import { withRouter } from 'react-router-dom'

class App extends Component {


  state = {
    signed: false
  }

  signWaiver = () => {
    this.setState({
      signed: true
    })
    
    this.props.history.push("/")
  }

  // showNewForm = () => {
  //   if (this.state.waiverSigned){
  //     this.setState({
  //       page: "new"
  //     })
  //   } else {
  //     alert("Sign the damn waiver!")
  //   }
    
  // }


  render(){
    return (
      <div className="App">
        <NavBar showNewForm={this.showNewForm} />
        <MainBody page={this.state.page} signed={this.state.signed} signWaiver={this.signWaiver}/>
      </div>
    );
  }

}



export default withRouter(App);
