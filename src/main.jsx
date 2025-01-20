import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import NotFoundPage from './components/common/NotFoundPage'
import ProtectedRoute from './components/common/ProtectedRoute'
import AddSpent from './components/payment/AddSpent'
import Payments from './components/payment/Payments'
import Profile from './components/profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <ProtectedRoute>
      <App />
    </ProtectedRoute>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: 
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/payments',
    element:
    <ProtectedRoute>
      <Payments />
    </ProtectedRoute>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/addSpent",
    element:
    <ProtectedRoute>
      <AddSpent />
    </ProtectedRoute>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signin",
    element: <Auth />,
    errorElement: <NotFoundPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
