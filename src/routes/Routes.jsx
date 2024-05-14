
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
import VolunteerNeedPostDetails from "../pages/VolunteerNeedPostDetails";


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
            path:'/volunteer-details',
            element: <PrivateRoute>
                <VolunteerNeedPostDetails></VolunteerNeedPostDetails>
            </PrivateRoute>
        }
    
    ]
  },
]);


export default router;

