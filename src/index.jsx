import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './main/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('app'))