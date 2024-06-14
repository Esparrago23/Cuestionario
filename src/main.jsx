import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import CreadorPFV from './pages/CreadorPFV.jsx'
import CreadorPMultiple from './pages/CreadorPMultiple.jsx'
import './index.css'
import Observar from './pages/Observar.jsx'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/view",
    element: <CreadorPFV/>,
  },
  {
    path: "/update",
    element: <CreadorPMultiple />,
  }
  ,
  {
    path: "/generate",
    element: <Observar />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)