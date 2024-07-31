import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './pages/Profile.tsx'
import Store from './pages/Store.tsx'

const router = createBrowserRouter([
  {
    path: "/JAP/",
    element: <App />,
    children: [
      {
        path: "/JAP/",
        element: <Profile />
      },
      {
        path: "/JAP/store",
        element: <Store />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
