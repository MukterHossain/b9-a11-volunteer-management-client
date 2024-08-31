import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-white shadow-sm'>
            
            <div className='container px-6 py-8 mx-auto'>
            <hr className='my-3 border-gray-200 md:my-8 ' />
                <div className='flex flex-col md:flex-row items-center justify-evenly text-center'>
                    <div className='flex gap-2 items-center'>
                        <Link to='/' className='flex gap-2 items-center'>
                            <img className='w-auto h-7' src={'https://i.ibb.co/cTPPCvM/help.png'} alt='' />
                            <span className=" text-3xl font-extrabold text-blue-800">TH</span>
                            <span className=" text-xl font-semibold pl-2"> Volunteers</span>
                        </Link>
                    </div>

                    <div className='flex flex-wrap items-center justify-center gap-2'>
                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Home{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            About{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Teams{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Privacy{' '}
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center md:gap-4 gap-2 py-4 md:py-8">
                    <span><FaGithub size={20}></FaGithub></span>
                    <span><FaGoogle size={20}></FaGoogle></span>
                    <span><FaFacebook size={20}></FaFacebook></span>
                    <span><FaYoutube size={20}></FaYoutube></span>
                    
                </div>

                <hr className='my-2  border-gray-200 md:my-4 ' />

                <div className=' text-center '>
                    <p className='text-sm text-gray-500 '>
                        © Copyright 2024. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;