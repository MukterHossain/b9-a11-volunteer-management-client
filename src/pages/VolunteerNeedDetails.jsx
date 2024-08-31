import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const VolunteerNeedDetails = () => {

    const volunteer = useLoaderData()
   
    const { _id, thumbnail, postTitle, category, deadline, description, location,
        noVolunteer, takeVolunteer } = volunteer;


        if(noVolunteer < 1  ) return (Swal.fire({
            icon: "error",
            title: "Can not add data",
          }))


    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Volunteer Need Details</title>
            </Helmet>
            <section className=" my-12 dark:text-gray-800">
                <div className="container grid grid-cols-1  lg:grid-cols-2 gap-5 justify-center p-5 mx-auto sm:py-8 lg:py-12 ">
                    <Fade direction="down" cascade={false} delay={400} triggerOnce={true}>
                        <div className='relative bg-gray-100 rounded-lg shadow-lg  p-3 '>
                            <img className="rounded-xl w-full object-contain" src={thumbnail} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full rounded-xl hover:bg-gray-100 duration-500  opacity-50"></div>
                        </div>
                    </Fade>
                    <div>
                        <Fade direction="up" cascade={false} delay={400} triggerOnce={true}>
                            <div className=" bg-gray-100 hover:bg-slate-200 transition-colors duration-500 w-full h-full pb-10 shadow-lg text-black  p-4  rounded-lg lg:text-left">
                                <h1 className="text-2xl text-blue-800 py-1 md:text-4xl font-bold leading-none lg:text-4xl">
                                    {postTitle} </h1>
                                <p className="text-[16px] md:text-xl pb-3 font-semibold text-orange-900">{category}</p>
                                <hr />
                                <p className="pb-3">{description}</p>
                                <hr />
                                <p className=""> <span className="text-sm font-bold">Location: </span>{location}</p>
                                <p className="pb-3"><span className="text-sm font-bold">No Volunteer: </span><span className="text-[16px]  font-bold text-blue-800">{noVolunteer}</span></p>
                                <hr />
                                <p className=""><span className="text-sm font-bold">Name: </span>{takeVolunteer.name}</p>
                                <p className=""><span className="text-sm font-bold">Email: </span>{takeVolunteer.email}</p>
                                <span className='text-sm font-light text-gray-800'>
                                    <span className="text-sm font-bold">Deadline: </span>
                                    {new Date(deadline).toLocaleDateString()}
                                </span>

                                <div className="flex flex-col mt-3 md:mt-5 items-center justify-center ">
                                    <Fade direction="right" cascade={false} delay={400} triggerOnce={true}>
                                        <NavLink to={`/beVolunteer/${_id}`} rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg bg-blue-400 rounded-lg  text-white hover:bg-green-300 transition-colors duration-500 hover:text-green-950 border-none font-semibold">Be a Volunteer</NavLink> </Fade>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VolunteerNeedDetails;