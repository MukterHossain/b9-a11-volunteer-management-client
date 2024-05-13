import { Link } from "react-router-dom";
import VolunteerNeedCard from "./VolunteerNeedCard";
import { useEffect, useState } from "react";
import axios from "axios";


const VolunteerNeedNow = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() =>{
        const getData = async()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/volunteers`)
            setVolunteers(data)
        } 
        getData()
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">Volunteer Need Now</h2>
                <p>Facilitate groups and individual sessions as a professional counselor or a peer-support counselor.</p>
            </div>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3  '>
                {volunteers.map(volunteer => (
                    <VolunteerNeedCard key={volunteer._id} volunteer={volunteer}></VolunteerNeedCard>
                ))}

            </div>
            <div className="text-center my-10">
                <Link to={'/need-volunteer'}>
                    <button className="btn btn-success text-xl font-semiBold">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerNeedNow;