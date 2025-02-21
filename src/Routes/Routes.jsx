import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllDasboard from "../Layout/AllDasboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


export const router = createBrowserRouter([
  {
    path: '/',
    element:  <MainLayout></MainLayout>,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: '/',
        element: <AllDasboard></AllDasboard>,
        children: [
          {
            path: 'profile',
            element: <Profile></Profile>
          }
        ]
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  }
]);
