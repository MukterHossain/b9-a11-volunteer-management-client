import { Helmet } from "react-helmet"
import NeedVolunteerCard from "./NeedVolunteerCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const NeedVolunteer = () => {
    const [perPage, setperPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNum, setPageNum] = useState(0)
    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')
    const [tableLayout, setTableLayout] = useState(false)


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allVolunteers?page=${currentPage}&size=${perPage}&search=${search}`)
            setItems(data)
        }
        getData()
    }, [currentPage, perPage, search])
    useEffect(() => {
        const getPageNum = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/volunteersCount?&search=${search}`)
            setPageNum(data.pageNum)
        }
        getPageNum()
    }, [search])
    console.log(items)
    const allPage = Math.ceil(pageNum / perPage)
    const pages = [...Array(allPage).keys()].map(
        count => count + 1
    );

    // pagination
    const handlePagination = (value) => {
        console.log(value);
        setCurrentPage(value)
    }

    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch(text)
    }
    console.log(search);



    // Change Layout button
    const toggleLayoutButton = () => {
        setTableLayout(!tableLayout)
    }


    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Need Volunteer</title>
            </Helmet>
            <div>
                <div className="text-right mr-12">
                    <button onClick={toggleLayoutButton} className={`shadow-md 
                        ${ tableLayout ? 'text-green-500': 'text-blue-500'}
                        hover:scale-[1.05] transition-all` }><TfiLayoutGrid3Alt size={30}></TfiLayoutGrid3Alt>
                    </button>
                </div>
                {
                    tableLayout ? (
                        <div className="container px-2 mx-auto  my-16 sm:p-4 dark:text-gray-800">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-xs">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col className="w-24" />
                                    </colgroup>
                                    <thead className="dark:bg-sky-300">
                                        <tr className="text-left text-[14px] font-bold">
                                            <th className="p-3">No</th>
                                            <th className="p-3">thumbnail</th>
                                            <th className="p-3">Location</th>
                                            <th className="p-3">Category</th>
                                            <th className="p-3">Dead Line</th>
                                            <th className="p-3">View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items?.map((data, index) =>
                                                <tr key={data._id} className="border-b text-sm border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                    <td className="">
                                                        <p>{index + 1}</p>
                                                    </td>
                                                    <td className="">
                                                        <p>{data.thumbnail}</p>
                                                    </td>
                                                    <td className="">
                                                        <p>{data.postTitle}</p>
                                                    </td>
                                                    <td className="">
                                                        <p className={`px-2 py-1 text-center text-bold 
                                            ${data.category === 'Health Care' && 'text-orange-600 bg-orange-100/60'}
                                            ${data.category === 'Education' && 'text-blue-600 bg-blue-100/60'}
                                            ${data.category === 'Social Service' && 'text-green-600 bg-green-100/60'}
                                            ${data.category === 'Animal Welfare' && 'text-pink-600 bg-pink-100/60'}
                                                text-xs rounded-full`} >
                                                            {data.category}
                                                        </p>
                                                    </td>
                                                    <td className="">
                                                        <p>{new Date(data.deadline).toLocaleDateString()}</p>
                                                    </td>
                                                    <td className=" text-right">
                                                        <p className='' >
                                                            < Link to={`/volunteer/${data._id}`} >
                                                                <button className="btn btn-success text-white hover:bg-green-300 hover:text-green-950 py-1 border-none font-semibold"> View Details</button>
                                                            </ Link>
                                                        </p>
                                                    </td>

                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="w-3/5 md:w-1/3 mx-auto ">
                                <form onSubmit={handleSearch}>
                                    <div className="flex p-1 rounded-lg bg-slate-200">
                                        <input className="px-6 py-2 w-full text-gray-700 placeholder:gray-500 bg-white rounded-l-md outline-none transparent" type="text" name="search" placeholder="Enter your Post Title" id="" />
                                        <button className="px-1 md:px-4 py-3 bg-slate-300 text-sm font-medium  rounded-r-md hover:bg-gray-600 hover:text-white  focus:outline-none">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3  '>
                                {
                                    items?.map((needData, index) => <NeedVolunteerCard index={index} key={needData._id} needData={needData}></NeedVolunteerCard>
                                    )}

                            </div>
                            <div>
                                <div className="flex justify-center mt-12">
                                    <button
                                        disabled={currentPage === 1}
                                        onClick={() => handlePagination(currentPage - 1)}
                                        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 bg-gray-300 transform rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed">
                                        <span className="mx-1 flex justify-center items-center gap-2"><FaArrowLeftLong></FaArrowLeftLong> Previous</span>
                                    </button>
                                    {/* hidden */}
                                    {pages?.map(page => (
                                        <button key={page}
                                            onClick={() => handlePagination(page)}
                                            className={`hidden px-4 py-2 mx-1 ${currentPage === page ? 'bg-blue-500 text-white' : ''} transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 hover:text-white text-blue-900`}> {page}</button>
                                    ))}
                                    <button
                                        disabled={currentPage === allPage}
                                        onClick={() => handlePagination(currentPage + 1)}
                                        className=" px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 bg-gray-300 transform rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed">
                                        <span className="mx-1 flex justify-center items-center gap-2">Next <FaArrowRightLong></FaArrowRightLong> </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default NeedVolunteer;