import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayouts from './Layouts/HomeLayouts.jsx';
import Home from './Pages/Home.jsx';
import AllEquipment from './Pages/AllEquipment.jsx';
import AddEquipment from './Pages/AddEquipment.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children: [
      {path: '/', element: <Home/>},
      
    ]
  },
  {path: '/all-equipment', element: <AllEquipment/>},
      {path: 'add-equipment', element: <AddEquipment/>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
