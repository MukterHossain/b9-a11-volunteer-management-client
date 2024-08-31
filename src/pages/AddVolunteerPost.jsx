import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import {Helmet} from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";


const AddVolunteerPost = () => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const handleAddVolunteerPost = async e =>{
        e.preventDefault();
        const form  = e.target;
        const thumbnail = form.thumbnail.value;
        const postTitle = form.postTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const noVolunteer = parseFloat(form.noVolunteer.value);
        const deadline = startDate;
        // const name = form.name.value;
        const email = form.email.value;

        const volunteerData = {thumbnail, deadline, postTitle, description, category, location, noVolunteer,   
            takeVolunteer:{
                email,
                name: user?.displayName
            }
        }
        console.log(volunteerData)
        try{
            const {data} = await axiosSecure.post(`/volunteer`, volunteerData)
            Swal.fire({
                icon: "success",
                title: "Welcome",
                text: "Add successfully",
              });
              navigate('/manage-my-post')

        }
        catch(error){
            console.log(error)
        }
        

        
    }

    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Add Volunteer Post</title>
            </Helmet>
            <Fade direction="down" cascade={false} delay={400} triggerOnce={true}>
            <section className="w-4/5 my-20 p-6 mx-auto text-gray-100 rounded-md shadow-xl bg-gray-500">
                <h2 className="text-xl md:text-3xl lg:text-4xl pb-4 text-center font-bold text-gray-100 underline">Add Volunteer Post</h2>

                <form onSubmit={handleAddVolunteerPost}>
                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                        <div>
                            <label className="text-gray-200 block w-full px-4 pb-2" >Thumbnail</label>
                            <input id="username" name="thumbnail" type="text" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Post Title</label>
                            <input id="username" type="text" name="postTitle" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input id="username" type="text" name="description" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Category</label>
                            <label className="block w-full  mt-2  text-gray-700">
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md block w-full '
                            >
                                <option value='Health Care'>Health Care</option>
                                <option value='Education'>Education</option>
                                <option value='Social Service'>Social Service</option>
                                <option value='Animal Welfare'>Animal Welfare</option>
                            </select>
                            </label>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Location</label>
                            <input id="username" type="text" name="location" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >No. of volunteers needed
</label>
                            <input id="emailAddress" type="number" name="noVolunteer" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div className="w-full ">
                            <label className="text-gray-700 pb-2 w-full dark:text-gray-200" >Deadline</label>
                            <br />
                            <span className="rounded-md block w-full px-4 mt-2 text-gray-700 bg-white">
                            <DatePicker 
                            className="block w-full px-4 py-2   bg-white  text-gray-800  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 outline-none dark:focus:border-blue-300 focus:outline-none "
                             selected={startDate} onChange={(date) => setStartDate(date)} />
                            </span>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" > Organizer name </label>
                            <input id="passwordConfirmation" type="text" defaultValue={user?.displayName} name="name" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Organizer email </label>
                            <input  type="email" defaultValue={user?.email} name="email" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                    </div>

                    <div className="flex justify-center px-10 mt-6">
                        <button className="px-8 py-2 text-lg bg-blue-400 rounded-lg  text-white hover:bg-green-300 transition-colors duration-500 hover:text-green-950 border-none font-semibold">Add Post</button>
                    </div>
                </form>
            </section>
            </Fade>
        </div>
    );
};

export default AddVolunteerPost;