import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllDasboard from "../Layout/AllDasboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyTask from "../Pages/Dashboard/MyTask/MyTask";
import ToDo from "../Pages/Dashboard/ToDo/ToDo";
import Inprogress from "../Pages/Dashboard/InProgress/Inprogress";
import CompleteTask from "../Pages/Dashboard/CompleteTask/CompleteTask";


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
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
          },
          {
            path: 'mytask',
            element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
          },
          {
            path: 'todo',
            element: <PrivateRoute><ToDo></ToDo></PrivateRoute>
          },
          {
            path: 'inprogress',
            element: <PrivateRoute><Inprogress></Inprogress></PrivateRoute>
          },
          {
            path: 'completetask',
            element: <PrivateRoute><CompleteTask></CompleteTask></PrivateRoute>
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
