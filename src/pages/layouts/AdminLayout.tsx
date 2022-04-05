import React from 'react';
import { Link, Outlet } from 'react-router-dom';

type Props = {}

const AdminLayout = (props: Props) => {
    return (


        <div>

            <div className="flex h-screen bg-gray-200">
                <div className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

                <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-blue-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex items-center">
                            <svg className="h-12 w-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                            </svg>

                            <span className="text-white text-2xl mx-2 font-semibold">Dashboard</span>
                        </div>
                    </div>

                    <nav className="mt-10">
                        <Link className="flex items-center mt-3 py-4 px-6 bg-slate-100 bg-opacity-25 text-gray-100" to="/admin/dashboard">

                            <img src="https://i.ibb.co/BBLFfb1/business-report.png" className='w-9' alt="" />

                            <span className="mx-6">Dashboard</span>
                        </Link>


                        <Link className="flex items-center mt-4 py-4 px-6 text-gray-500 hover:bg-slate-100 hover:bg-opacity-25 hover:text-gray-100"
                            to="/admin/category">

                            <img src="https://i.ibb.co/vDvY58Q/shopping-list.png" className='w-9' alt="" />

                            <span className="mx-6">Categories</span>
                        </Link>

                        <Link className="flex items-center mt-4 py-4 px-6 text-gray-500 hover:bg-slate-100 hover:bg-opacity-25 hover:text-gray-100"
                            to="/admin/product">
                            <img src="https://i.ibb.co/PZCsnH5/book.png" className='w-9' alt="" />

                            <span className="mx-6">Products</span>
                        </Link>
                        <Link className="flex items-center mt-4 py-4 px-6 text-gray-500 hover:bg-slate-100 hover:bg-opacity-25 hover:text-gray-100"
                            to="/admin/user">
                            <img src="https://i.ibb.co/3YCbFjf/man.png" className='w-9' alt="" />

                            <span className="mx-6">User</span>
                        </Link>
                        <Link className="flex items-center mt-4 py-4 px-6 text-gray-500 hover:bg-slate-100 hover:bg-opacity-25 hover:text-gray-100"
                            to="/admin/cart">
                            <img src="https://i.ibb.co/WB0MBmT/shopping-cart.png" className='w-9' alt="" />

                            <span className="mx-6">Cart</span>
                        </Link>
                        <Link className="flex items-center mt-4 py-4 px-6 text-gray-500 hover:bg-slate-100 hover:bg-opacity-25 hover:text-gray-100"
                            to="/">
                            <img src="https://i.ibb.co/DMJKW8g/home-button.png" className='w-9' alt="" />

                            <span className="mx-6">Back Home</span>
                        </Link>
                    </nav>
                </div>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-2 border-indigo-300">
                        <div className="flex items-center">
                            <button className="text-gray-500 focus:outline-none lg:hidden">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </button>

                            <div className="relative mx-4 lg:mx-0">
                                <form action="">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                    </span>

                                    <input className="py-2 w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600 z-30" type="text"
                                        placeholder="Search" />

                                </form>

                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="relative">
                                <button className="flex mx-4 text-gray-600 focus:outline-none">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>



                            </div>

                            <div className="relative">
                                <button className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                    <img className="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                        alt="Your avatar" />
                                </button>

                                {/* <div className="fixed inset-0 h-full w-full z-10"></div> */}


                            </div>
                        </div>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container mx-auto px-6 py-8">
                            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>

                            <div className="mt-9">
                                <div className="flex flex-wrap -mx-6">
                                    <div className="w-full px-6 sm:w-1/2 xl:w-1/5">
                                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white hover:scale-105 hover:bg-pink-200 hover:translate-y-[-7px] ease-in-out transition-all ">
                                            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">

                                                <img src="https://i.ibb.co/pdR6d6V/user.gif" className='w-14' alt="" />
                                            </div>

                                            <div className="mx-5">
                                                <h4 className="text-2xl font-semibold text-gray-700">8,282</h4>
                                                <div className="text-gray-500">Total Users</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/5 sm:mt-0">
                                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white hover:scale-105 hover:bg-pink-200 hover:translate-y-[-7px] ease-in-out transition-all">
                                            <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                                <img src="https://i.ibb.co/BZZSyZ8/book.gif" className='w-14' alt="" />
                                            </div>

                                            <div className="mx-5">
                                                <h4 className="text-2xl font-semibold text-gray-700">200,521</h4>
                                                <div className="text-gray-500">Total Product</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/5 sm:mt-0">
                                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white hover:scale-105 hover:bg-pink-200 hover:translate-y-[-7px] ease-in-out transition-all">
                                            <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                                <img src="https://i.ibb.co/BZZSyZ8/book.gif" className='w-14' alt="" />
                                            </div>

                                            <div className="mx-5">
                                                <h4 className="text-2xl font-semibold text-gray-700">200,521</h4>
                                                <div className="text-gray-500">Total Post</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/5 xl:mt-0">
                                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white hover:scale-105 hover:bg-pink-200 hover:translate-y-[-7px] ease-in-out transition-all">
                                            <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                                                <img src="https://i.ibb.co/gzSxzfh/checklist.gif" className='w-14' alt="" />
                                            </div>

                                            <div className="mx-4">
                                                <h4 className="text-2xl font-semibold text-gray-700">215,542</h4>
                                                <div className="text-gray-500">Total Category</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/5 xl:mt-0">
                                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white hover:scale-105 hover:bg-pink-200 hover:translate-y-[-7px] ease-in-out transition-all">
                                            <div className="p-3 rounded-full bg-stone-500 bg-opacity-75">
                                                <img src="https://i.ibb.co/J5swndJ/shipping.gif" className='w-14' alt="" />
                                            </div>

                                            <div className="mx-5">
                                                <h4 className="text-2xl font-semibold text-gray-700">215,542</h4>
                                                <div className="text-gray-500">Total Order</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">

                            </div>

                            <div className="h-0.5 bg-gray-500 w-full my-5"> </div>

                            {/* viet o day */}

                            <div>
                                <Outlet />
                            </div>


                        </div>
                    </main>
                </div>
            </div >
        </div >



    )









}

export default AdminLayout