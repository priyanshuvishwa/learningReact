import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route ,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import path from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        index:true,               // this is for default route when the path is '/' and it will render the Home component
        element:<Home />
      },
      {
        path:'about',
        element:<About /> 
      },
      {
        path:'github',
        element:<Github /> 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
