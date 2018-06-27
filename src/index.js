import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import App from './components/App'
import { addTodo } from './actions'

let store = createStore(todo)

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
