import { Link } from "react-router-dom";


const VolunteerNeedCard = ({ volunteer }) => {
    const { thumbnail, post_title, category, deadline } = volunteer;





    return (
        <div className="">
            <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                <div className=''>
                    <span className='text-xs font-light text-gray-800 '>
                        <img className="rounded-xl" src={thumbnail} alt="" />

                    </span>

                </div>
                <div className="mb-5">
                    <h1 className='mt-2 text-xl font-bold text-gray-800 '>
                        {post_title.substr(0, 30)}
                    </h1>

                    <h2 className=' py-1 text-xl text-blue-800 '>
                        {category}
                    </h2>
                    <span className='text-sm font-light text-gray-800'>
                        Deadline:
                        {new Date(deadline).toLocaleDateString()}
                    </span>
                </div>
                < Link to={`/`} >
                    <button className="btn btn-success"> View Details</button>
                </ Link>
            </div>
            
        </div>
    );
};

export default VolunteerNeedCard;