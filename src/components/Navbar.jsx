import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>

        < NavLink to='/' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-lg  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-lg border-2 border-gray-200 '}>Home</NavLink>
        <NavLink to='/need-volunteer' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-lg  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-lg border-2 border-gray-200 '}>Need Volunteer</NavLink>
        <NavLink to='/volunteer-details' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-lg  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-lg border-2 border-gray-200 '}>Volunteer Need Post Details</NavLink>
        {/* {
            user && <>
                <NavLink to='/' className={({ isActive }) => isActive ? 'py-1 px-3 rounded-sm  font-bold bg-green-400 text-white' : 'font-bold py-1 px-3 rounded-sm border-2 border-gray-200 '}>Add Tourists Spot</NavLink>
            </>
        } */}

    </>
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
                            className='font-bold text-sm text-green-400 '
                        >
                            My Profile
                        </div>
                        
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2'
                        >

                            <li>
                            < NavLink to='/add-volunteer' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-xl  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-xl border-2 border-gray-200 '}>Add Volunteer Post</NavLink>
                                {/* <Link to={'/add-volunteer'} className='justify-between'> Add Volunteer Post</Link> */}
                            </li>
                            <li>
                            < NavLink to='/manage-my-post' className={({ isActive }) => isActive ? 'py-1 px-3 border-2  rounded-xl  font-bold text-green-400 border-green-400' : 'font-bold py-1 px-3 rounded-xl border-2 border-gray-200 '}>Manage My Post</NavLink>
                                {/* <Link to={'/manage-my-post'}> Manage My Post</Link> */}
                            </li>
                        </ul>
                    </div>

                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div className="flex justify-around items-center">
                                    <label  tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div title={user?.displayName || 'user name not found'} className="w-10 rounded-full">
                                            <img referrerPolicy="no-referrer"  src={user?.photoURL || "https://i.ibb.co/pnNbsKQ/sundarban.jpg"} />
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