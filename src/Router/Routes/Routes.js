import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";

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
     path: '/services',
     element: <AllServices></AllServices>,
    loader: () => fetch('http://localhost:5000/services'),
    },

    {
     path: '/login',
     element: <Home></Home>   
    },
    {
     path: '/blog',
     element: <Blog></Blog>  
    },
    {
     path: '/*',
     element: <Error></Error>  
    },
]
    }
])

export default router;