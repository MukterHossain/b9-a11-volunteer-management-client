import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";



const BeVolunteer = () => {
    const beVolunteer = useLoaderData()
    const { _id, thumbnail, postTitle, description, category, location, noVolunteer, deadline,  takeVolunteer } = beVolunteer;
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()


    const handleBeVolunteer = async e => {
        e.preventDefault();
        if (user?.email === takeVolunteer?.email) return (Swal.fire({
            icon: "error",
            title: "Your are not permitted",
        }))
        if (noVolunteer < 1) return (Swal.fire({
            icon: "error",
            title: "You can not request",
        }))

        const form = e.target;
        const email = form.email.value;
        const name = user?.displayName
        const suggestion = form.suggestion.value;
        const status = 'Pending';
        const volunteerData = {
            thumbnail, deadline, postTitle, description, category, location, noVolunteer,  status, suggestion, name, email,
            takeVolunteer }
        try {
            const { data } = await axiosSecure.post(`/beVolunteer?id=${_id}`, volunteerData)
            Swal.fire({
                icon: "success",
                title: "Welcome",
                text: "Add successfully",
            });
            navigate('/manage-my-post')

        }
        catch (error) {
            Swal.fire({
                icon: "error",
                title: "Something was wrong!",
                text: "Not add data successfully",
            });
        }

    }
    
    
    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Be Volunteer</title>
            </Helmet>
            <Fade direction="down" cascade={false} delay={400} triggerOnce={true}>
                <section className="w-4/5 my-20 p-6 mx-auto text-gray-100 rounded-md shadow-xl bg-gray-500">
                    <Fade direction="right" cascade={false} delay={400} triggerOnce={true}>
                        <h2 className="text-xl md:text-3xl lg:text-4xl pb-4 text-center font-bold text-gray-100 underline">Be A Volunteer</h2>
                    </Fade>

                    <form onSubmit={handleBeVolunteer}>
                        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" >Thumbnail</label>
                                <input id="username" name="thumbnail" defaultValue={thumbnail} type="text" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" >Post Title</label>
                                <input id="username" type="text" defaultValue={postTitle} name="postTitle" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" >Description</label>
                                <input id="username" type="text" defaultValue={description} name="description" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Category</label>
                                <label className="block w-full  mt-2  text-gray-700">
                                    <input id="category" type="text" defaultValue={category} name="category" className="outline-none p-2 rounded-md block w-full focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </label>
                            </div>
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" >Location</label>
                                <input id="username" type="text" defaultValue={location} name="location" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" >No. of volunteers needed
                                </label>
                                <input id="noVolunteer" type="number" defaultValue={noVolunteer} name="noVolunteer" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="w-full">
                                <label className=" text-gray-700 pb-2 w-full dark:text-gray-200" >Deadline</label>
                                <br />
                                <span className="rounded-md block w-full px-4 mt-2 text-gray-700 bg-white py-2">
                                    {new Date(deadline).toLocaleDateString()}
                                </span>
                            </div>

                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" > Organizer name </label>
                                <input id="passwordConfirmation" type="text" defaultValue={takeVolunteer?.name} name="name" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" > Organizer email </label>
                                <input id="passwordConfirmation" type="text" defaultValue={takeVolunteer?.email} name="name" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" > User name </label>
                                <input id="passwordConfirmation" type="text" defaultValue={user?.displayName} name="name" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" >User email </label>
                                <input type="email" defaultValue={user?.email} name="email" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-200 block w-full px-4 pb-2" >Suggestion</label>
                                <input type="text" name='suggestion' className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>

                        <div className="flex justify-center px-10 mt-6">
                            <button type="submit" className="px-8 py-2 text-lg bg-blue-400 rounded-lg  text-white hover:bg-green-300 transition-colors duration-500 hover:text-green-950 border-none font-semibold">Request</button>
                        </div>
                    </form>
                </section>
            </Fade>
        </div>
    );
};

export default BeVolunteer;