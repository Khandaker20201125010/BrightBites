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

export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
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
            element:<PriveteRoute><Appointment></Appointment></PriveteRoute> 
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
    children: [
        {
            path: 'MyAppointment',
            element:<MyAppointment></MyAppointment>
        },
        {
            path: 'MyReviews',
            element:<MyReviews></MyReviews>
        },
        {
            path: 'MyHistory',
            element:<MyHistory></MyHistory>
        },
    ]
}
])