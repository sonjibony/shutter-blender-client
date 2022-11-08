import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails/ServiceDetails";

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
     path: '/services/:id',
     element: <ServiceDetails></ServiceDetails>,
    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
    },

    {
     path: '/login',
     element: <Login></Login>   
    },
    {
     path: '/register',
     element: <Registration></Registration>  
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