import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/style.scss'
import Root from './pages/Root/Root'

import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Root />
      </Provider>
   </React.StrictMode>
)
