import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../types/User';
import { useEffect } from 'react';
// import { listCate } from '../../../api/user';

type UserProps = {
    users: User[];
    // email: string,
    // name: string,
    // password: string
    onRemove: (_id: number) => void
}

const index = (props: UserProps) => {
    // const [user, setUser] = useState<UserProps[]>([])
    // useEffect(() => {
    //     (async () => {
    //         const { data } = await list();
    //         setUser(data)
    //         // console.log(data, set);

    //     })()

    // }, [])
    return (
        <div><h1>User list</h1>



            <div className="flex flex-col mt-8">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div
                        className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th
                                        className="w-5 px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Stt</th>
                                    <th
                                        className="w-5/12 px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Name</th>
                                    <th
                                        className="w-[150px] px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Email</th>
                                    <th
                                        className="w-[150px] px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Status</th>
                                    <th
                                        className="w-[70px] px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Action</th>

                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                {props.users.map((item, index) => {
                                    return <tr key={index}>
                                        <td className=" whitespace-no-wrap border-b border-gray-200 ">
                                            <div className="text-sm ml-[-30px] leading-5 text-gray-500">{index + 1}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                            <div className="">
                                                <div className="">
                                                    <div className="text-sm text-left leading-5 font-medium text-gray-900">{item.name} </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 whitespace-no-wrap border-b border-gray-200 ">
                                            <div className="text-sm text-left leading-5 text-gray-900">{item.email}</div>
                                        </td>

                                        <td className="px-6 py-4 text-left whitespace-no-wrap border-b border-gray-200">
                                            <span
                                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {item.role}</span>
                                        </td>


                                        <td
                                            className="flex px-6 py-4 text-left whitespace-no-wrap  border-b border-gray-200 text-sm leading-5 font-medium">
                                            <button className="text-xs rounded-full bg-red-500 text-white px-2 py-1  hover:scale-125  hover:bg-red-700  ease-in-out transition-all">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                            <Link to="" className="text-xs rounded-full bg-blue-500 text-white px-3 pt-[7px]  hover:scale-125 hover:bg-blue-700  ease-in-out transition-all ml-6">Edit</Link>
                                        </td>
                                    </tr>


                                }
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index