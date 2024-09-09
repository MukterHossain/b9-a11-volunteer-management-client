
import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost";
import NeedVolunteer from "../pages/NeedVolunteer";
import VolunteerNeedDetails from "../pages/VolunteerNeedDetails";
import PrivateRoute from "./PrivateRoute";
import BeVolunteer from "../pages/BeVolunteer";
import UpdatePost from "../pages/UpdatePost";
import MyRequest from "../pages/MyRequest";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element: <Register></Register>
        },
        {
            path: '/need-volunteer',
            element: <NeedVolunteer></NeedVolunteer>
        }
        ,
        {
            path: '/myRequest',
            element: <PrivateRoute>
                <MyRequest></MyRequest>
            </PrivateRoute>
        },
        {
            path: '/add-volunteer',
            element: <PrivateRoute>
                <AddVolunteerPost></AddVolunteerPost>
                </PrivateRoute>
        },
        {
            path: '/manage-my-post',
            element: <PrivateRoute>
                <ManageMyPost></ManageMyPost>
            </PrivateRoute>
        },
        {
            path: '/volunteer/:id',
            element: <PrivateRoute>
                <VolunteerNeedDetails></VolunteerNeedDetails>
            </PrivateRoute>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)

        },
        {
            path:'/beVolunteer/:id',
            element: <PrivateRoute>
                <BeVolunteer></BeVolunteer>
                </PrivateRoute>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
           
        }
        ,
       
        {
            path:'/update/:id',
            element:<PrivateRoute>
                <UpdatePost></UpdatePost>
                </PrivateRoute>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)  
        }
    
    ]
  },
]);


export default router;

