import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MapPage from './pages/MapPage.jsx'

const router = createBrowserRouter([
  {
    path: '/map',
    element: <MapPage />,
  },
])
function App() {

    return <RouterProvider router={router} />;
}

export default App
