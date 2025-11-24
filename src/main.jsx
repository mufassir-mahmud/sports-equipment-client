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
import Featured_Equipment from './Components/Featured_Equipment.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import PrivateRoute from './Provider/PrivateRoute.jsx';
import MyEquipment from './Pages/MyEquipment.jsx';
import EquipmentDetails from './Pages/EquipmentDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    errorElement : <ErrorPage/>,
    children: [
      {path: '/', element: <Home/>, },
      
      
    ]
  },
  {path: '/all-equipment', element: <AllEquipment/>,
  loader : () => fetch('http://localhost:4001/equipments')
  },
   {path: 'add-equipment', element: <PrivateRoute>
    <AddEquipment/>
   </PrivateRoute>,  },
   {path: 'my-equipment', element: <PrivateRoute>
    <MyEquipment/>
   </PrivateRoute>,},
   {path:'/login', element: <Login/>},
   {path: '/register', element: <Register/>},
   {path: '/equipment-details/:id', element: <PrivateRoute>
    <EquipmentDetails/>
   </PrivateRoute>, loader: ({params}) => fetch(`http://localhost:4001/equipments/${params.id}`)}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
    
  </StrictMode>,
)
