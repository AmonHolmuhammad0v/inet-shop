import { createBrowserRouter, createHashRouter } from "react-router";
import { Paths } from "./paths";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createHashRouter([
    {
        path: Paths.menu,
        element: <Menu/>
    },
    {
        path: Paths.login,
        element: <Login/>
    },
    {
        path: Paths.register,
        element: <Register/>
    },
])