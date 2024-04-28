import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import About from "../Pages/About/About";
import PopularPost from "../Pages/LandingContent/Left/PopularPost/PopularPost";
import GearDetails from "../Pages/LandingContent/Left/PopularPost/GearDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: ([
           {
            path: "/",
            element: <Home />
           },
           {
            path: "/about",
            element: <About />
           },
           {
            path: "/login",
            element: <Login />
           },
           {
            path: "/register",
            element: <SignUp />
           },
           {
            path: "/popularPost",
            element: <PopularPost />
           },
           {
            path: "/gear",
            element: <GearDetails />
           }
        ])
    }
])
export default router;