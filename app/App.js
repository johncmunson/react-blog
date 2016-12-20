import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory  } from 'react-router'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './Redux/Like'

const store2 = createStore(reducer)

ReactDOM.render(
    <Provider store={store2}>
        <Router history={ hashHistory }>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)
