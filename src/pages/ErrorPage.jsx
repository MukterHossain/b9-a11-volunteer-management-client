import { Link } from "react-router-dom";
import ErrorImg from '../../src/assets/404.jpg'


const ErrorPage = () => {
    return (
        <div className=" px-6 pt-6 mx-auto ">
          <div className="flex justify-center">
            <img className="w-1/2 " src={ErrorImg} alt="" />
          </div>
          <div className='wf-ull text-center'>
            <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
              Page not found
            </h1>
            <p className='mt-4 text-gray-500 dark:text-gray-400'>
              Sorry, the page you are looking for doesnt exist.Here are some
              helpful links:
            </p> 
            
          </div>
          <div className="text-center my-4  hover:scale-[1.05] transition-all ">
          <Link to={'/'} className="text-lg px-8 py-2 bg-blue-500 rounded-lg  text-white hover:bg-green-300 transition-colors duration-500 hover:text-green-950 border-none font-semibold text-center btn btn-outline">Home</Link >
          </div>
  
          
        </div>
    );
};

export default ErrorPage;