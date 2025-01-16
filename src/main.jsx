import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/common/NotFoundPage'
import AddSpent from './components/payment/AddSpent'
import Payments from './components/payment/Payments'
import Profile from './components/profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/payments',
    element: <Payments />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/addSpent",
    element: <AddSpent />,
    errorElement: <NotFoundPage />,
  },
  // {
  //   path: '/notification',
  //   element: <Notification />,
  //   errorElement: <NotFoundPage />,
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
