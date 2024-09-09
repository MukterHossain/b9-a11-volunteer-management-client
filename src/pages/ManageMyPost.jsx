import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { CgCloseO } from "react-icons/cg";


const ManageMyPost = () => {
    const { user} = useContext(AuthContext)
    const [myData, setMyData] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axiosSecure(`/needVolunteer/${user?.email}`,)
        setMyData(data)
    }
    // handle Delete
    const handleDelete = async id => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (data) => {
                if (data.isConfirmed) {
                    const { data } = await axiosSecure.delete(`/volunteer/${id}`)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
                // refresh data
                getData()
            });
        }
        catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Data not deleted',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }



    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Manage My Post</title>
            </Helmet>
            {
                myData?.length > 0 ?
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
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Location</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Dead Line</th>
                                        <th className="p-3 text-right">Update</th>
                                        <th className="p-3">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myData?.map(data =>
                                            <tr key={data._id} className="border-b text-sm border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                <td className="p-3">
                                                    <p>{data.takeVolunteer.email}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{data.location}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className={`px-2 py-1 text-center text-bold 
                                            ${data.category === 'Health Care' && 'text-orange-600 bg-orange-100/60'}
                                            ${data.category === 'Education' && 'text-blue-600 bg-blue-100/60'}
                                            ${data.category === 'Social Service' && 'text-green-600 bg-green-100/60'}
                                            ${data.category === 'Animal Welfare' && 'text-pink-600 bg-pink-100/60'}
                                                text-xs rounded-full`} >
                                                        {data.category}
                                                    </p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{new Date(data.deadline).toLocaleDateString()}</p>
                                                </td>
                                                <td className="p-2 text-right">
                                                    <Link to={`/update/${data._id}`}>
                                                        <button className="btn btn-sm bg-green-400"><FiEdit size={20}></FiEdit></button></Link>
                                                </td>
                                                <td className="p-2 text-right">
                                                    <button onClick={() => handleDelete(data._id)} className="btn btn-sm text-red-500 bg-gray-200"><MdDelete size={25}></MdDelete></button>

                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className="md:w-1/2 mx-auto px-12 mt-12 md:file:mt-24">
                        <h2 className="flex justify-center"><CgCloseO className="text-red-700 font-bold" size={50}></CgCloseO></h2>
                        <h2 className="text-xl md:text-3xl text-red-700 font-bold text-center">Here are no data!</h2>
                    </div>
            }
        </div>
    );
};

export default ManageMyPost;