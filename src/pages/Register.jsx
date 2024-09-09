
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";


const Register = () => {
    const { createUser, user, setUser, updateUserProfile, loading } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    const from = location.state || '/'


    // Email and password
    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setRegisterError('')
        setRegisterSuccess('')


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase and one lowercase  characters')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase and one lowercase  characters')
            return;
        }

        try {
            const result = await createUser(email, password)
            await updateUserProfile(name, photo)
            setUser({ ...result?.user, photoURL: photo, displayName: name })

            const { data } = await axiosSecure.post(`/jwt`, {
                email: result?.user?.email,
            })
            navigate('/')
            navigate(from, { replace: true })
            Swal.fire({
                icon: "success",
                title: "Welcome",
                text: "Register Successfully",
            });
            setRegisterSuccess('user created successfully')
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                text: "Register not Successfully",
            });
            setRegisterError(err.message)
        }
    }
    if (user || loading) return
    
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <div className='flex w-full max-w-sm mx-auto gap-4  overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 hover:scale-[1.05] transition-all py-8 md:px-8 shadow-lg rounded-md lg:w-1/2'>
                    <Fade direction="right" cascade={false} delay={400} triggerOnce={true}>
                        <div className='flex justify-center mx-auto'>
                            <img
                                className='w-auto h-7 sm:h-8'
                                src={'https://i.ibb.co/cTPPCvM/help.png'}
                                alt=''
                            />
                        </div>
                    </Fade>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Get Your Free Account Now.
                    </p>
                    <Fade direction="down" cascade={false} delay={400} triggerOnce={true}>
                        <form onSubmit={handleSignUp}>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='name'
                                >
                                    Username
                                </label>
                                <input
                                    id='name'
                                    autoComplete='name'
                                    name='name'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                            </div>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='photo'
                                >
                                    Photo URL
                                </label>
                                <input
                                    id='photo'
                                    autoComplete='photo'
                                    name='photo'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                            </div>
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
                                {
                                    registerError && <p className="text-red-600">{registerError}</p>
                                }
                                {
                                    registerSuccess && <p className="text-green-600">{registerSuccess}</p>
                                }
                            </div>
                            <div className='mt-6'>
                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </Fade>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs font-bold text-blue-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>       
               <div
                    className='hidden bg-cover hover:scale-[1.05] transition-all shadow-lg rounded-md bg-center lg:w-1/2 lg:block '
                    style={{
                        backgroundImage: `url(https://i.ibb.co/s3kJvvy/volunteer2.jpg)`,
                    }}
                ></div>               
            </div>
        </div>
    );
};

export default Register;