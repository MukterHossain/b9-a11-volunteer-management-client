
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
            path: '/add-volunteer-post',
            element: <AddVolunteerPost></AddVolunteerPost>
        },
        {
            path: '/manage-my-post',
            element: <ManageMyPost></ManageMyPost>
        },
        {
            path: '/volunteer-details/:id',
            element: <VolunteerNeedDetails></VolunteerNeedDetails>

        }
    
    ]
  },
]);


export default router;

