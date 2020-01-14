import React from 'react';
import './App.css';

import SomeChild from './SomeChild'

import { connect } from 'react-redux'

import { addLike, removeLike, handleChange, toggleDark, changePokemonName, thunkyChangePokemonName } from './redux/actions'

class App extends React.Component {

  componentDidMount(){
    // fetch("https://pokeapi.co/api/v2/pokemon/1")
    // .then(res => res.json())
    // .then(data => {
    //   // add this data to redux
    //   this.props.changePokemonName(data.name)
    // })


    this.props.thunkyChangePokemonName(1)
  }


  render(){
    return (
      <div className={"App" + (this.props.reduxDark ? " dark" : "")}>
        <h1>{this.props.pokemonName}</h1>
        <button onClick={this.props.toggleDark}>Dark mode</button>
        <h3>{this.props.reduxText}</h3>
        <input 
          name="text" 
          value={this.props.reduxText} 
          onChange={this.props.handleChange}/>
        <h4>{this.props.reduxLikes} likes</h4>
        <button onClick={this.props.addLike}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={this.props.removeLike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <SomeChild />
      </div>
    );
  }
  
} // end of App


function msp(state){
  return {
    reduxLikes: state.beef.likes,
    reduxDark: state.beef.darkMode,
    reduxText: state.beef.text,
    pokemonName: state.poke.pokemonName
  }
}

// function mdp(dispatch){
//   return {
//     changePokemonName: (newName) => {
//       dispatch(changePokemonName(newName))
//     }, 
//     addLike: () => {
//       dispatch(addLike())
//     }
//   }
// }



export default connect(msp, { addLike, removeLike, handleChange, toggleDark, changePokemonName, thunkyChangePokemonName })(App);












