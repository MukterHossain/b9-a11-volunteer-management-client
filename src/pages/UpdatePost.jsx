import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";


const UpdatePost = () => {
    const { user} = useContext(AuthContext)
    const navigate = useNavigate()
    const updateData = useLoaderData()
    const axiosSecure = useAxiosSecure()

    const { _id, thumbnail, deadline, postTitle, description, category, location, noVolunteer } = updateData;
    const [startDate, setStartDate] = useState(new Date(deadline) || new Date());

    const handleUpdateVolunteerPost = async e => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const postTitle = form.postTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const noVolunteer = parseFloat(form.noVolunteer.value);
        const deadline = startDate;
        const name = form.name.value;
        const email = form.email.value;

        const volunteerData = {
            thumbnail, deadline, postTitle, description, category, location, noVolunteer, name, email,
            takeVolunteer: {
                email,
                name: user?.displayName
            }
        }
        try {

            const { data } = await axiosSecure.put(`/volunteer/${_id}`, volunteerData)
            Swal.fire("Updated Post Successfully")
            navigate('/manage-my-post')
        }
        catch (error) {
            Swal.fire(" Post not successfully Update")
        }
    }
    
    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Update</title>
            </Helmet>
            <Fade direction="down" cascade={false} delay={400} triggerOnce={true}>
            <section className="w-4/5 my-20 p-6 mx-auto text-gray-100 rounded-md shadow-xl bg-gray-500">
            <Fade direction="left" cascade={false} delay={400} triggerOnce={true}>
                <h2 className="text-xl md:text-3xl lg:text-4xl pb-4 text-center font-bold text-gray-100 underline">Update Volunteer</h2></Fade>
                <form onSubmit={handleUpdateVolunteerPost}>
                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 block w-full px-4 pb-2" >Thumbnail</label>
                            <input id="username" name="thumbnail" defaultValue={thumbnail} type="text" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Post Title</label>
                            <input id="username" type="text" name="postTitle" defaultValue={postTitle} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input id="username" type="text" name="description" defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Category</label>
                            <label className="block w-full py-2 text-gray-100   rounded-md     ">
                                <select
                                    name='category'
                                    id='category'
                                    defaultValue={category}
                                    className=' px-3 py-2 rounded-md bg-gray-800 block w-full border-none '
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
                            <input id="username" type="text" name="location" defaultValue={location} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >No. of volunteers needed
                            </label>
                            <input id="emailAddress" type="number" name="noVolunteer" defaultValue={noVolunteer} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="w-full">
                            <label className="text-gray-700 w-full dark:text-gray-200" >Deadline</label>
                            <br />
                            <span className="rounded-md block w-full px-4 mt-2 text-gray-700 bg-gray-800">
                            <DatePicker 
                            className="block w-full px-2 py-2 text-gray-100  rounded-md   bg-gray-800 outline-none border-none focus:ring"
                             selected={startDate} onChange={(date) => setStartDate(date)} />
                            </span>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" > Organizer name </label>
                            <input id="passwordConfirmation" type="text" defaultValue={user?.displayName} name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Organizer email </label>
                            <input type="email" defaultValue={user?.email} name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-center px-10 mt-6">
                        <button className="px-8 py-2 text-lg bg-blue-400 rounded-lg  text-white hover:bg-green-400 transition-colors duration-500 hover:text-green-950 border-none font-semibold">Updated Post</button>
                    </div>
                </form>
            </section>
            </Fade>
        </div>
    );
};

export default UpdatePost;