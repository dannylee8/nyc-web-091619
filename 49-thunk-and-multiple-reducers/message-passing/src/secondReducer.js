const defaultState = {
   pokemonName: "",
   userAssignments: []
}

function reducer(prevState = defaultState, action){
    console.log("SECOND", action)

  switch(action.type){
    // case "LOG_IN":
    //   return {...prevState, userAssignments: action.payload.userAssignments}
    case "CHANGE_POKEMON_NAME":
      return {...prevState, pokemonName: action.payload}
    default:
      return prevState
  }

}

export default reducer