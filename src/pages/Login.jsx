import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import useAxiosSecure from "../hooks/useAxiosSecure";

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const { signIn, signInWithGoogle, user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

    
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const from = location.state || '/';

    // googleSignIn 
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle()
            Swal.fire({
                icon: "success",
                title: "Welcome",
                text: "Successfully Login",
            });
            navigate(from, { replace: true })
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Your are invalid person!",
            });
        }

    }


    // Email and password
    const handleSignIn = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password)
            const { data } = await axiosSecure.post(`/jwt`, {
                email: result?.user?.email,
            })
            console.log(data)
            Swal.fire({
                icon: "success",
                title: "Welcome",
                text: "Successfully Login",
            });
            // console.log(result.user)
            e.target.reset();
            navigate(from, { replace: true })
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Your are invalid person!",
            });
        }
    }

    if (user || loading) return

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <div className='flex w-full max-w-sm mx-auto gap-4 overflow-hidden bg-white rounded-lg   lg:max-w-4xl '>
 
                    <div
                        className='hidden bg-cover hover:scale-[1.05] transition-all  shadow-lg bg-center lg:block lg:w-1/2'
                        style={{
                            backgroundImage: `url(https://i.ibb.co/kcKx6Ty/volunteer1.jpg)`,
                        }}

                    ></div>
                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2 hover:scale-[1.05] transition-all  shadow-lg rounded-md'>
                        <div className='flex justify-center mx-auto'>
                            <img
                                className='w-auto h-7 sm:h-8'
                                src={'https://i.ibb.co/cTPPCvM/help.png'}
                                alt=''
                            />
                        </div>

                        <p className='mt-3 text-xl text-center text-gray-600 '>
                            Welcome back!
                        </p>

                        <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                            <div className='px-4 py-2'>
                                <FaGoogle></FaGoogle>
                            </div>

                            <span className='w-5/6 px-4 py-3 font-bold text-center'>
                                Sign in with Google
                            </span>
                        </div>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  lg:w-1/4'></span>

                            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                                or login with email
                            </div>

                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                        </div>
                        <form onSubmit={handleSignIn}>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Email Address
                                </label>
                                <input
                                    id='LoggingEmailAddress'
                                    autoComplete='email'
                                    name='email'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='email'
                                />
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <label
                                        className='block mb-2 text-sm font-medium text-gray-600 '
                                        htmlFor='loggingPassword'
                                    >
                                        Password
                                    </label>
                                </div>

                                <input
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='password'
                                />
                            </div>
                            <div className='mt-6'>
                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  md:w-1/4'></span>

                            <Link
                                to='/signup'
                                className='text-xs font-bold text-blue-500 uppercase  hover:underline'
                            >
                                or sign up
                            </Link>

                            <span className='w-1/5 border-b  md:w-1/4'></span>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;