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
          <div className="text-center mt-4">
          <Link to={'/'} className="text-lg text-center btn btn-outline">Home</Link >
          </div>
  
          
        </div>
    );
};

export default ErrorPage;