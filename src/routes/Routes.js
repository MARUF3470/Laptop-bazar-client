import About from "../pages/About/About";
import Addproduct from "../pages/AddProduct/Addproduct";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/products/ProductDetails";
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
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
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