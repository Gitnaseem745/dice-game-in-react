import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import GamePage from './components/GamePage/GamePage'
import Layout from './components/Layout/Layout'


const  router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
            path: "",
            element: <Home />
        },
            {
            path: "/game-page",
            element: <GamePage />
        },
    ]
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
