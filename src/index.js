import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './sass/style.scss'
import Root from './pages/Root/Root'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'

import { Provider } from 'react-redux'
import { store } from './store'

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
         {
            errorElement: <Error />,
            children: [
               { index: true, element: <Home /> },

               {
                  path: '*',
                  element: <Error />,
               },
            ],
         },
      ],
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './sass/style.scss'
// import Root from './pages/Root/Root'
// import { Provider } from 'react-redux'
// import { store } from './store'
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//    <React.StrictMode>
//       <Provider store={store}>
//          <Root />
//       </Provider>
//    </React.StrictMode>
// )

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // // reportWebVitals();
