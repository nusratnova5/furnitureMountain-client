import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main"
import Banner from "../Pages/Banner/Banner";
import Blog from "../Pages/Blog/Blog";
import CategoryDetailsCard from "../Pages/CategoryDetails/CategoryDetailsCard";
import AddAProduct from "../Pages/DashBoard/AddAProduct/AddAProduct";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSeller from "../Pages/DashBoard/AllSeller/AllSeller";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import MyBookings from "../Pages/DashBoard/MyBookings/MyBookings";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home"
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import Error from "./Error";
import PrivateRoute from "./PrivateRoute";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                loader: async() =>{
                    return fetch(`https://resale-market-server-side-nusratnova5.vercel.app/categories`);
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
                    return fetch(`https://resale-market-server-side-nusratnova5.vercel.app/category_details?id=${params.id}`)
                },
                element:<PrivateRoute><CategoryDetailsCard></CategoryDetailsCard></PrivateRoute>
            },
            {
                path:'/banner',
                element:<Banner></Banner>
            }, 
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard//paid/:id',
                loader: async({params}) => {
                    return fetch(`https://resale-market-server-side-nusratnova5.vercel.app/bookings/${params.id}`);
                },
                element: <Payment></Payment>
            },
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    }
])

export default router;