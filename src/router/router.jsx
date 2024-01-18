import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";


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
            path: "/login",
            element: <Login />
           },
           {
            path: "/register",
            element: <SignUp />
           }
        ])
    }
])
export default router;