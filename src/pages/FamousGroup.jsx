import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const FamousGroup = () => {
    return (
        <div className="my-12 bg-gray-100 rounded-xl">
            <div className="mt-16 ">
                <h1 className="text-xl md:text-3xl font-bold text-blue-600 py-3 text-center uppercase">Prominent Volunteer Group</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 my-12 gap-6">
                <Fade direction="left" cascade={false} delay={400} triggerOnce={true}>
                    <div className='w-full  px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                        <div className='relative '>
                            <span className=' flex justify-center items-center'>
                                <img className="rounded-full shadow-xl border border-gray-300" src='https://i.ibb.co/XY2LxZx/global-care.jpg' alt="" />
                            </span>
                            <div className="absolute top-0 left-0 w-full h-full rounded-xl hover:bg-gray-100 duration-500  opacity-50"></div>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-[16px] font-semibold text-blue-500 py-3 text-center uppercase">How is Global Care tackling and can I help fight poverty in Bangladesh?</h1>
                        </div>
                        <div className="mb-5">
                            <p className='text-sm font-light text-gray-800 text-justify'>
                                We have centres in Horintana, Kalatala and Dacope Union. All three are cyclone-proof buildings which double as pre-schools and community centres, in disadvantaged rural communities.  Our partners, supported by Global Care.
                            </p>
                        </div>
                        <div className="text-center space-x-2">
                            < Link to={`/login`} >
                                <button className="btn btn-success text-white hover:bg-green-300 hover:text-green-950 py-1 border-none font-semibold"> Login</button>
                            </ Link>
                            < Link to={`https://www.globalcare.org`} >
                                <button className="btn bg-green-300 text-gray-800 hover:bg-green-600 hover:text-white py-1 border-none font-semibold"> Live Site</button>
                            </ Link>
                        </div>
                    </div>
                </Fade>

                <Fade direction="down" cascade={false} delay={400} triggerOnce={true}>
                    <div className='w-full  px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                        <div className='relative '>
                            <span className=' flex justify-center items-center'>
                                <img className="rounded-full shadow-xl border border-gray-300" src='https://i.ibb.co/7JQj7qD/xscuba-diving.jpg' alt="" />
                            </span>
                            <div className="absolute top-0 left-0 w-full h-full rounded-xl hover:bg-gray-100 duration-500  opacity-50"></div>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-[16px] font-semibold text-blue-500 py-3 text-center uppercase">Volunteer in Asia at Community, Conservation and Animal Rescue Projects</h1>
                        </div>
                        <div className="mb-5">
                            <p className='text-sm font-light text-gray-800 text-justify'>
                                Volunteer in Asia Ethically and Responsibly with a UK registered Charity. Indeed, Globalteer is dedicated to supporting sustainable Community, Conservation & Animal Rescue projects. So, volunteer to help projects working towards a better future!
                            </p>
                        </div>
                        <div className="text-center space-x-2">
                            < Link to={`/login`} >
                                <button className="btn btn-success text-white hover:bg-green-300 hover:text-green-950 py-1 border-none font-semibold"> Login</button>
                            </ Link>
                            < Link to={`https://www.globalteer.org`} >
                                <button className="btn bg-green-300 text-gray-800 hover:bg-green-600 hover:text-white py-1 border-none font-semibold"> Live Site</button>
                            </ Link>
                        </div>
                    </div>
                </Fade>

                <Fade direction="right" cascade={false} delay={400} triggerOnce={true}>
                    <div className='w-full  px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                        <div className='relative '>
                            <span className=' flex justify-center items-center'>
                                <img className="rounded-full shadow-xl border border-gray-300" src='https://i.ibb.co/s6zsrnK/JAAGO-Logo.jpg' alt="" />
                            </span>
                            <div className="absolute top-0 left-0 w-full h-full rounded-xl hover:bg-gray-100 duration-500  opacity-50"></div>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-[16px] font-semibold text-blue-500 py-3 text-center">DO YOU WANT TO WORK FOR THE UNDERPRIVILEGED COMMUNITIES ?</h1>
                        </div>
                        <div className="mb-5">
                            <p className='text-sm font-light text-gray-800 text-justify'>
                                Volunteer for Bangladesh (VBD), the youth wing of JAAGO Foundation, was formed with a mission to empower youths and motivate them to create positive societal impacts and help achieve sustainable development goals.
                            </p>
                        </div>
                        <div className="text-center space-x-2">
                            < Link to={`/login`} >
                                <button className="btn btn-success text-white hover:bg-green-300 hover:text-green-950 py-1 border-none font-semibold"> Login</button>
                            </ Link>
                            < Link to={`https://jaago.com.bd`} >
                                <button className="btn bg-green-300 text-gray-800 hover:bg-green-600 hover:text-white py-1 border-none font-semibold"> Live Site</button>
                            </ Link>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default FamousGroup;