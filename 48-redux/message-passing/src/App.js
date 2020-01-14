import React from 'react';
import './App.css';

import { connect } from 'react-redux'

import { addLike, removeLike, handleChange, toggleDark } from './redux/actions'

function App (props){

  return (
    <div className={"App" + (props.reduxDark ? " dark" : "")}>
      <button onClick={props.toggleDark}>Dark mode</button>
      <h3>{props.reduxText}</h3>
      <input 
        name="text" 
        value={props.reduxText} 
        onChange={props.handleChange}/>
      <h4>{props.reduxLikes} likes</h4>
      <button onClick={props.addLike}>
        Like<span role="img" aria-label="thumbs up">👍</span>
      </button>
      <button onClick={props.removeLike}>
        Dislike <span role="img" aria-label="thumbs down">👎</span>
      </button>
    </div>
  );
} // end of App




// read values from state (i need to see stuff state)
function msp(state){
  return {
    reduxLikes: state.likes,
    reduxDark: state.darkMode,
    reduxText: state.text
  }
}

// change values in state (i need to change state and rerender )
// function mdp(dispatch){
//   return {
//     addLike: () => { 
//       dispatch(addLike())
//     },
//     removeLike: () => {
//       dispatch(removeLike())
//     },
//     toggleDark: (one, two, three) => {
//       dispatch(toggleDark(one, two, three))
//     },
//     handleChange: (event) => {
//       dispatch(handleChange(event))
//     }
//   }
// }


export default connect(msp, { addLike, removeLike, handleChange, toggleDark })(App);












