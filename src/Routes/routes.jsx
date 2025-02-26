import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Appointment from "../Pages/Appointment";
import ContactUs from "../Pages/ContactUs";
import Reviews from "../Pages/Reviews";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
            element: <Appointment></Appointment>
        },
        {
            path: '/contact',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/reviews',
            element:<Reviews></Reviews>
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
}
])