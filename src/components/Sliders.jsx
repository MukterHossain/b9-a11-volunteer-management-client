import { Link } from "react-router-dom";


const Sliders = ({image, text}) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem] rounded-xl'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center  rounded-xl justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {text}
                    </h1>
                    <br />
                    <Link to='/' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-pink-400 rounded-3xl lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-gray-500'>
                        Join as Volunteer
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sliders;