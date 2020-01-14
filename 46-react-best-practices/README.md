React Best Practices
====================

## SWBAT

- [ ] Write cleaner React code

## Objectives

- Opinions
  - [x] Code Organization/file structure 
    - Container vs Component folder
      - Container folder contains components that are stateful (have lots of data)
      - Component folder containers components that are stateless and purely presentational (if there is state, it is purely for UI and does not contain any data)
    - Separate folders for each model containing components that are devoted solely to displaying info about those models
  - [x] 
    - Container vs Presentational components
    - Smart vs Dumb Components
    - Class vs Functional Component *** (more syntactic)

- Optimizations:
  - [x] Functional vs Class Components
  - [x] Fragments

- Best Practices:
  - [x] Functional setState
  - [x] "then" callback for setState
  - [x] Callbacks (avoid useless wrapping) (DON'T DO IT)

- JS tricks/bugs often seen in React:
  - [x] Arrow functions returning objects
  - [x] Destructuring
  - [x] Spread (w/ prepend and append)
  - [x] Objects with the same key/value name
  - [x] constructor vs. ES7 instance variables
  - [x] map (as a way to update objects in an array of objects)
  - [x] { [variable]: "as_key" }

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)

## Lecture Notes

