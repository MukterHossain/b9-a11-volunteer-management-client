import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('light');
    const navLinks = <>

        < NavLink to='/' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-lg   font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-lg border-2 border-gray-200 '}>Home</NavLink>
        <NavLink to='/need-volunteer' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-lg  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-lg border-2 border-gray-200 '}>Need Volunteer</NavLink>
        <NavLink to='/volunteer-details' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-lg  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-lg border-2 border-gray-200 '}>Volunteer Need Post Details</NavLink>

    </>

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }
    }



    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <Link to='/' className='flex gap-2 items-center'>
                            <img className='w-auto h-7' src={'https://i.ibb.co/cTPPCvM/help.png'} alt='' />
                            <span className=" text-3xl font-extrabold text-blue-800">TH</span>
                            <span className=" text-xl font-semibold pl-2"> Volunteers</span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* my profile */}
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='font-bold text-sm text-green-400 pr-2'
                        >
                            My Profile
                        </div>

                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2'
                        >

                            <li>
                                < NavLink to='/add-volunteer' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-xl  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-xl border-2 border-gray-200 '}>Add Volunteer Post</NavLink>
                            </li>
                            <li>
                                < NavLink to='/manage-my-post' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-xl  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-xl border-2 border-gray-200 '}>Manage My Post</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label className="cursor-pointer grid place-items-center">
                            <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>

                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div className="flex justify-around items-center">
                                    <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div title={user?.displayName || 'user name not found'} className="w-10 rounded-full">
                                            <img referrerPolicy="no-referrer" src={user?.photoURL || "https://i.ibb.co/pnNbsKQ/sundarban.jpg"} />
                                        </div>
                                    </label>
                                    {/* onClick={handleLogOut} */}
                                    <button onClick={logOut} className="btn btn-sm bg-green-500 text-white font-semibold">Log Out</button>
                                </div>

                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm bg-green-500 text-white font-semibold">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;