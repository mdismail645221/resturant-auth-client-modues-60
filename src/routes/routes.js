import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Login from "../components/Login";
import Product from "../components/Product";
import Resgister from "../components/Resgister";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'home',
                element: <Home></Home>,
            },
            {
                path: 'product',
                element: <PrivateRoute><Product></Product></PrivateRoute>,
            },
            {
                path: 'about',
                element: <About></About>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Resgister></Resgister>,
            },

        ]
    }
])