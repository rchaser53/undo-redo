import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './component/App'
import { createStore } from 'redux'
import reducer from './reducer/reducer'

const store = createStore(reducer)

ReactDOM.render(<App store={store} />, document.querySelector('#root'))