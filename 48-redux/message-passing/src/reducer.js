const defaultState = {
  likes: 0,
  text: "",
  darkMode: false,
  thangs: []
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "ADD_LIKE":
      return {...prevState, likes: prevState.likes + 1}
    case "REMOVE_LIKE":
      return {...prevState, likes: prevState.likes - 1}
    case "TOGGLE_DARK":
      return {...prevState, darkMode: !prevState.darkMode}
    case "HANDLE_CHANGE":
      return {...prevState, text: action.payload}
    case "ADD_THANG":
      return {...prevState, thangs: [...prevState.thangs, action.payload]}
    default:
      return prevState
  }

}

export default reducer