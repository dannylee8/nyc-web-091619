import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import reducer from './reducer'
import secondReducer from './secondReducer'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'


const rootReducer = combineReducers({
    beef: reducer, 
    poke: secondReducer
})

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));















