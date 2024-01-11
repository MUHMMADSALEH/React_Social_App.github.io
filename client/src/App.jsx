import React, { Children, useContext } from 'react'
import Login from './pages/signin/Login'
import Register from './pages/singup/Register'
import Navebar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { AuthContext } from './context/AuthContextProvider'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Logout from './components/logout/Logout'
const Layout=()=>{

  return(
    <div >
      <Navebar/>
      <div style={{display:"flex"}}>
        <Leftbar/>
        <div style={{flex:"6"}}>
        <Outlet/>

        </div>
        <Rightbar/>
      </div>

    </div>
  )
 
  }
const App = () => {
  const {currentUser}=useContext(AuthContext)
  const ProtectedRoute=({children})=>{
    if(!currentUser)
    {
     return  <Navigate to="/login"/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRoute><Layout/></ProtectedRoute> ,
      children:[
        {
        path: "/",
        element: <Home/>,
        },
        {
          path: "/profile/:id",
          element:<Profile/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/logout",
      element: <Logout/>
    }
  ]);
    return (
      <div>
      
       <RouterProvider router={router} />
     
     
    </div>
  )
}

export default App
