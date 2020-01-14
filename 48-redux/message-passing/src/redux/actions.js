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