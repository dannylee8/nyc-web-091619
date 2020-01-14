// action

export function addLike(){
  return {type: "ADD_LIKE"}
}

export function removeLike(){
  return {type: "REMOVE_LIKE"}
}

export function toggleDark(){
  return {type: "TOGGLE_DARK"}
}

export function handleChange(event){
  return {type: "HANDLE_CHANGE", payload: event.target.value}
}

export function changePokemonName(newName){
  return {type: "CHANGE_POKEMON_NAME", payload: newName}
}

export function thunkyChangePokemonName(id){
  return function(dispatch){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: "CHANGE_POKEMON_NAME", payload: data.name})
    })
  }
}

// export function toggleActive(){
//   return function(dispatch){
//     fetch(`url/user/${id}/toggle_job_search`, {
//       method: "PATCH"
//     })
//     .then(res => res.json())
//     .then(user => {
//       dispatch({type: "CHANGE_USER", payload: user})
//     })
//   }
// }


