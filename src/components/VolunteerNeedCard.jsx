import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const VolunteerNeedCard = ({ volunteer, index }) => {
    const {_id, thumbnail, postTitle, category, deadline } = volunteer;





    return (
        <div className="">
            <Fade direction="down" cascade={false} delay={index * 200} triggerOnce={true} > 
            <div className='w-full  px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all hover:bg-slate-100'>
                <div className='relative '>
                    <span className=' '>
                        <img className="rounded-xl " src={thumbnail} alt="" />
                    </span>
                    <div className="absolute top-0 left-0 w-full h-full rounded-xl hover:bg-gray-100 duration-500  opacity-50"></div>
                </div>
                <div className="mb-5">
                    <h1 className='mt-2 text-2xl font-bold text-green-800 '>
                        {postTitle?.substr(0, 30)}
                    </h1>

                    <h2 className=' py-1 text-lg text-blue-800 '>
                        {category}
                    </h2>
                    <span className='text-sm font-light text-gray-800'>
                        Deadline:
                        {new Date(deadline).toLocaleDateString()}
                    </span>
                </div>
                < Link to={`/volunteer/${_id}`} >
                    <button className="btn btn-success text-white hover:bg-green-300 hover:text-green-950 py-1 border-none font-semibold"> View Details</button>
                </ Link>
            </div>
            </Fade>
            
        </div>
    );
};

export default VolunteerNeedCard;