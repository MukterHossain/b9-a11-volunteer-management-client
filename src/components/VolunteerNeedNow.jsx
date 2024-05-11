import { Link } from "react-router-dom";
import VolunteerNeedCard from "./VolunteerNeedCard";


const VolunteerNeedNow = ({ volunteers }) => {

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
                <Link to={'/'}>
                    <button className="btn btn-success text-xl font-semiBold">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerNeedNow;