import React from 'react'
import ReactDOM from 'react-dom/client'
import {PageRoutes} from './controller/PageRoutes'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={PageRoutes}/>
  </React.StrictMode>,
)