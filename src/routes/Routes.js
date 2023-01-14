import About from "../pages/About/About";
import Addproduct from "../pages/AddProduct/Addproduct";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproduct',
                element: <Addproduct></Addproduct>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])
export default router