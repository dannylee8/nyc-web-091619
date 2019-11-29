import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import MainBody from './MainBody'

class App extends Component {


  state = {
    page: "waiver",
    waiverSigned: false
  }

  signWaiver = () => {
    this.setState({
      page: "index",
      waiverSigned: true
    })
  }

  showNewForm = () => {
    if (this.state.waiverSigned){
      this.setState({
        page: "new"
      })
    } else {
      alert("Sign the damn waiver!")
    }
    
  }


  render(){
    return (
      <div className="App">
        <NavBar showNewForm={this.showNewForm} />
        <MainBody page={this.state.page} signWaiver={this.signWaiver}/>
      </div>
    );
  }

}



export default App;
