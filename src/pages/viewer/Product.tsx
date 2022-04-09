import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Product = (props: Props) => {
    return (
        <div className='relative pt-52 flex'>


            <aside className="ml-[-100%] h-[950px] z-10  pb-3 px-6 w-full flex flex-col justify-between border rounded-r-lg bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] shadow-xl shadow-zinc-400">
                <div>

                    <ul className="space-y-8 tracking-wide mt-8 ">
                        <li>
                            <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                </svg>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                </svg>
                                <span className="group-hover:text-gray-700">Categories</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                </svg>
                                <span className="group-hover:text-gray-700">Reports</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                                <span className="group-hover:text-gray-700">Other data</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                </svg>
                                <span className="group-hover:text-gray-700">Finance</span>
                            </a>
                        </li>
                    </ul>
                </div>


            </aside>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">


                <div className="px-6 2xl:container">
                    <div className="max-w-2xl mx-auto px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">

                        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>

                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>

                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>

                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>

                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>

                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>

                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>

                            <div className="group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
                                <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                    <Link to="/product">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>

                                </div>

                                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                                    <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
                                </div>

                                <div className="mt-1 ">
                                    <div>
                                        <h3 className="text-xl my-1 text-gray-600 font-extrabold">

                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            9 màu chia ly

                                        </h3>

                                    </div>
                                    <div className='mb-2 flex justify-around'>
                                        <div><del><p className="mt-1 text-sm text-red-500">$50</p></del></div>
                                        <div><p className="text-base font-medium text-gray-900">$35</p></div>
                                    </div>

                                </div>
                            </div>





                        </div>
                    </div>

                    <div className="h-0.5 bg-gray-300 w-full my-4"> </div>
                    <nav aria-label="Page navigation">
                        <ul className="inline-flex space-x-2">
                            <li><button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                            <li><button className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1</button></li>
                            <li><button className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">2</button></li>
                            <li><button className="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline">3</button></li>
                            <li><button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                        </ul>
                    </nav>
                    <div className="h-0.5 bg-gray-300 w-full my-4"> </div>

                </div>




            </div>
        </div>
    )
}

export default Product