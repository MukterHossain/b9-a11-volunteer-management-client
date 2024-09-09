import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { FcCancel } from "react-icons/fc";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { CgCloseO } from "react-icons/cg";


const MyRequest = () => {
    const { user } = useContext(AuthContext)
    const [requestData, setRequestData] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        getData()
    }, [user]) 

    const getData = async () => {
        const { data } = await axiosSecure(`/beVolunteer-email/${user?.email}`)
        setRequestData(data)
    }


    const handleCancel = async (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Canceled it!"
            }).then(async (dataF) => {
                const { data } = await axiosSecure.delete(`/beVolunteer/${id}`)
                if (dataF.isConfirmed) {
                    Swal.fire({
                        title: "Canceled!",
                        text: "Your file has been Canceled.",
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
                text: 'Data not Canceled',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <div>
            <Helmet>
                <title>TH Volunteers || My Request</title>
            </Helmet>
            {
                requestData?.length > 0 ?
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
                                        <th className="p-3 text-right">Status</th>
                                        <th className="p-3">Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        requestData?.map(data =>
                                            <tr key={data._id} className="border-b text-sm border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                <td className="p-3">
                                                    <p>{data.email}</p>
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
                                                <td className="p-3 text-right">
                                                    <p className={`px-2 py-1 text-center text-bold                                        
                                        ${data.status === 'Pending' && 'text-blue-600 bg-blue-100/60'}
                                         text-xs rounded-full`} >
                                                        {data.status}
                                                    </p>
                                                </td>
                                                <td className="p-3 text-center">
                                                    <button
                                                        onClick={() => handleCancel(data._id)} className="  "><FcCancel size={20}></FcCancel></button>

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

export default MyRequest;