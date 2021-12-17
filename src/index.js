import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// Reducer Components
import UserReducer from './Redux/UserReducer'
import GameReducer from './Redux/GameReducer'

const MainReducers = combineReducers({
  UserReducer,
  GameReducer
})

const Store = createStore(MainReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ Store } >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();