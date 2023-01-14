import About from "../pages/About/About";
import Home from "../pages/Home/Home";

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
                path: '/about',
                element: <About></About>
            }
        ]
    }
])
export default router