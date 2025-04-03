import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Appointment from "../Pages/Appointment";
import ContactUs from "../Pages/ContactUs";
import Reviews from "../Pages/Reviews";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PriveteRoute from "../PrivetRoutes/PrivetRoute";
import DashBoards from "../Layout/Dashboards/Dashboards";
import MyAppointment from "../Pages/DashBoardsPages/UserPages/MyAppointment";
import MyReviews from "../Pages/DashBoardsPages/UserPages/MyReviews";
import MyHistory from "../Pages/DashBoardsPages/UserPages/MyHistory";
import AllUsers from "../Pages/DashBoardsPages/AdminPages/AllUsers";
import ManageDoctor from "../Pages/DashBoardsPages/AdminPages/ManageDoctor";
import AddDoctor from "../Pages/DashBoardsPages/AdminPages/AddDoctor";
import DisplayError from "../Shared/DisplayError/DisplayError";
import AddAppointment from "../Pages/DashBoardsPages/AdminPages/AddAppointment";
import Payment from "../Pages/DashBoardsPages/Payment/Payment";
import AdminPrivetRoutes from "../PrivetRoutes/AdminPrivetRoutes";
import AdminProfile from "../Pages/DashBoardsPages/AdminPages/AdminProfile";

export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element:<About></About> 
        },
        {
            path: '/appointment',
            element:<Appointment></Appointment>
        },
        {
            path: '/contact',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
    ]
},
{
    path:'dashboard',
    element:<DashBoards></DashBoards>,
    errorElement: <DisplayError></DisplayError>,
    children: [
        {
            path: 'MyAppointment',
            element:<MyAppointment></MyAppointment>
        },
        {
            path: 'MyReviews',
            element:<PriveteRoute><MyReviews></MyReviews></PriveteRoute>
        },
        {
            path: 'MyHistory',
            element:<PriveteRoute><MyHistory></MyHistory></PriveteRoute>
        },
        {
            path: '/dashboard/payment/:id',
            element:<Payment></Payment>
        },
        //Admin routes
        {
            path: 'adminProfile',
            element:<AdminPrivetRoutes><AdminProfile></AdminProfile></AdminPrivetRoutes>
        },
        {
            path: 'allUsers',
            element:<AdminPrivetRoutes><AllUsers></AllUsers></AdminPrivetRoutes>
        },
         {
            path: 'addDoctor',
            element:<AdminPrivetRoutes><AddDoctor></AddDoctor></AdminPrivetRoutes>
        },
         {
            path: 'manageDoctors',
            element:<AdminPrivetRoutes><ManageDoctor></ManageDoctor></AdminPrivetRoutes>
        },
         {
            path: 'addAppointment',
            element:<AdminPrivetRoutes><AddAppointment></AddAppointment></AdminPrivetRoutes>
        },
    ]
}
])