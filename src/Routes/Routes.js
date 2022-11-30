import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main"
import Blog from "../Pages/Blog/Blog";
import CategoryDetailsCard from "../Pages/CategoryDetails/CategoryDetailsCard";
import MyBookings from "../Pages/DashBoard/MyBookings/MyBookings";
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
                loader: async() =>{
                    return fetch(`http://localhost:5000/categories`);
                },
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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/card/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/category_details?id=${params.id}`)
                },
                element:<CategoryDetailsCard></CategoryDetailsCard>
            }
            
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>
            }
        ]
    }
])

export default router;