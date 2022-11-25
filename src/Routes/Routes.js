import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Home from "../Pages/Home/Home"
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/details',
                element:<PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>
            }
            
        ]
    }
])

export default router;