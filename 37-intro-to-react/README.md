# Intro to React

## SWBATs
- [x] Recognize declarative and imperative coding paradigms
- [x] Visualize/identify Components on any website
- [x] Explain what a Component is conceptually in the UI
- [x] Explain what a React Component actually is in code
- [x] Briefly explain Babel's purpose in React
- [x] Use JSX to build custom components and render them in the browser
- [x] See how props are to components as arguments are to functions

## Notes

### Declarative vs Imperative Programming

#### Imperative 

Making Burrito
- Cook the rice
- Cook the beans
- Cook the protein
- Chop veggies
- Heat tortilla
- Pile stuff into tortilla
- Add toppings
- Fold
- Roll
- Enjoy
- Cry with joy

```js
const container = document.getElementById("container")


const div = document.createElement("div")
div.className = "card"
div.innerHTML = "<h1>This is a burrito!</h1>"
div.id = "top"
container.append(div)

const div2 = document.createElement("div")
div.className = "card"
div.innerHTML = "<h1>This is a taco!</h1>"
div.id = "bottom"
container.append(div2)

```

### Declarative

How does Chipotle work?
- Tell them you want a burrito
- Tell them what type of rice
- Tell them what type of beans
- Tell them what type of protein
- Tell them what toppings
- Pay
- Cry with joy

```js
function createCard(content, id){
  const container = document.getElementById("container")


  const div = document.createElement("div")

  div.className = "card"
  div.innerHTML = `<h1>${content}</h1>`
  div.id = id

  container.append(div)
}

createCard("This is a burrito", "top")
createCard("This is a taco", "bottom")
```


### Absatractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
