import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
  }

  dispatch = (action) => {
    const copyState = this.reducer(action)
    this.setState(copyState)
  }

  reducer = (action) => {
    // reduces the old state, a message, and a payload down to ONE NEW STATE  
    switch(action.message){
      case "LIKE":
        return {...this.state, likes: this.state.likes + 1}
      case "DISLIKE":
        return {...this.state, likes: this.state.likes - 1}
      case "DARK_MODE":
        return {...this.state, darkMode: !this.state.darkMode}
      case "HANDLE_CHANGE":
        return {...this.state, text: action.payload.target.value}
      default: 
        return {...this.state}
    }
  }


  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch({message: "DARK_MODE"})}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(e) => this.dispatch({message: "HANDLE_CHANGE", payload: e})}/>
        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch({message: "LIKE"})}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={() => this.dispatch({message: "DISLIKE"})}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
      </div>
    );
  }
}

export default App;
