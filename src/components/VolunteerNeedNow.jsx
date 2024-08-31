import { Link } from "react-router-dom";
import VolunteerNeedCard from "./VolunteerNeedCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";


const VolunteerNeedNow = () => {
    const [volunteersData, setVolunteersData] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() =>{
        const getData = async()=>{
            const {data} = await axiosSecure.get(`/volunteers`)
            setVolunteersData(data)
        } 
        getData()
    }, [axiosSecure])
    console.log(volunteersData)

    const volunteers = volunteersData?.slice(0, 6)

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">Volunteer Need Now</h2>
                <p>Facilitate groups and individual sessions as a professional counselor or a peer-support counselor.</p>
            </div>
            <div className='grid grid-cols justify-center items-center gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                {
                volunteers?.map((volunteer, index )=>  <VolunteerNeedCard index={index} key={volunteer._id} volunteer={volunteer}></VolunteerNeedCard>
                )}

            </div>
            <div className="text-center my-10">
                <Link to={'/need-volunteer'}>
                    <button className="px-8 py-2 text-lg bg-blue-400 rounded-lg  text-white hover:bg-green-300 transition-colors duration-500 hover:text-green-950 border-none font-semibold">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerNeedNow;