import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import About from "../Pages/About/About";
import PopularPost from "../Pages/LandingContent/Left/PopularPost/PopularPost";


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
           }
        ])
    }
])
export default router;