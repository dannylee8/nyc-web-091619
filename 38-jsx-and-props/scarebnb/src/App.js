import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import MainBody from './MainBody'

class App extends Component {

  render(){
    return (
      <div className="App">
        <NavBar />
        <MainBody />
      </div>
    );
  }

}



export default App;
