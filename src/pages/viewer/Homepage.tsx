import React from 'react'
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';

type Props = {}

const Homepage = (props: Props) => {
    return (
        <div>


            {/* Banner */}
            <div className='relative'><Banner /></div>
            {/* end Banner */}

            {/* Content 1 */}
            <div className='mt-36 mb-60 flex justify-around'>
                <div className='my-auto'>
                    <div className='text-left text-gray-700 text-2xl font-medium my-5'>
                        <p>CREATIVE VISION</p>
                    </div>
                    <div className='text-left text-6xl font-bold my-5'>
                        <h2>We Collect & Publish Books</h2>
                    </div>
                    <div className='mt-8 text-lg font-sans text-gray-700'>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
                    </div>
                    <div className='text-left mt-20'>
                        <Link className='border-2 px-9  ease-in-out transition-all hover:bg-yellow-700 py-4 bg-yellow-500 text-slate-50' to="">About Us</Link>
                    </div>
                </div>
                {/* left */}

                <div>
                    <div className='absolute left-[60%] bottom-[-50%] z-30'>
                        <Link to="">
                            <img className='hover:shadow-lg hover:shadow-black rounded-md z-10 grayscale hover:grayscale-0 hover:translate-y-[-30px] ease-in-out  transition-all ' src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/image-2.jpg" alt="" width="400px" />
                        </Link>
                    </div>
                    <div >
                        <Link to="">
                            <img className='shadow-lg hover:shadow-black rounded-md hover:translate-y-[-30px] grayscale hover:grayscale-0 ease-in-out transition-all' src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-10.jpg" alt="" width="410px" />
                        </Link>
                    </div>
                </div>
                {/* right */}
            </div>
            {/* end content 1 */}

            {/* content 2 */}
            <div className='relative rounded-md my-10 bg-gray-200 w-[1800px] mx-auto'>
                <div className='pt-8'>
                    <p className='font-sans text-lg'>OUR SHOP</p>
                    <h2 className='mx-auto font-medium text-6xl w-[600px]'>Read These Books &
                        Starts a New Life</h2>
                </div>
                {/* title */}
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


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
                            <div className='z-30 translate-x-[-35px] delay-75 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </Link>

                            </div>

                            <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </Link>

                            </div>

                            <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                            <div className='z-30 translate-x-[-35px] delay-75 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </Link>

                            </div>

                            <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </Link>

                            </div>

                            <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                            <div className='z-30 translate-x-[-35px] delay-75 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </Link>

                            </div>

                            <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </Link>

                            </div>

                            <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                                <Link to="/product">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-red-400 h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                <div className='relative pb-14 z-30'>
                    <Link to="" className=' border-2 px-6 bg-slate-700 hover:bg-black transition-all ease-in-out text-white py-3 border-slate-700'>View More Book</Link>
                </div>
            </div>
            {/* end content 2 */}

            {/* content 3 */}
            <div className='relative mt-28'>
                <div>
                    <p className='font-medium text-xl'>WHAT'S NEW</p>
                    <h2 className='mt-8 mb-16 font-serif text-7xl'>Blog Updates</h2>
                    <div className='flex justify-center'>
                        <div className='ml-[70px]'>
                            <div> <img src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-7.jpg" width="600px" alt="" /></div>
                            <div className='flex mt-7'>
                                <div className='w-[120px]'>
                                    <p className='font-medium text-5xl'>13</p>
                                    <p className='font-medium'>MAR</p>
                                </div>
                                <div className='w-[480px] text-left'>
                                    <h4 className='font-serif text-black text-4xl'>What do you need for a calm and relaxing vacation ?</h4>
                                    <p className='mt-[10px] font-sans text-zinc-500'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>

                        </div>
                        {/* left */}
                        <div className='ml-8'>
                            <div className='flex mb-7'>
                                <div className='mr-8'>
                                    <img src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-7.jpg" width="236px" alt="" />
                                </div>
                                <div className='my-auto '>
                                    <div className='flex'>
                                        <h6 className='font-medium text-2xl mr-4'>UPDATES</h6>
                                        <p className='text-zinc-500 mt-[5px] font-sans' >Mar 13.2020</p>
                                    </div>
                                    <div className='w-[400px] text-left'>
                                        <h4 className='font-sans text-3xl'>Start your day properly with the hottest novelties</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='flex mb-7'>
                                <div className='mr-8'>
                                    <img src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-7.jpg" width="236px" alt="" />
                                </div>
                                <div className='my-auto '>
                                    <div className='flex'>
                                        <h6 className='font-medium text-2xl mr-4'>UPDATES</h6>
                                        <p className='text-zinc-500 mt-[5px] font-sans' >Mar 13.2020</p>
                                    </div>
                                    <div className='w-[400px] text-left'>
                                        <h4 className='font-sans text-3xl'>Start your day properly with the hottest novelties</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='flex mb-7'>
                                <div className='mr-8'>
                                    <img src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-7.jpg" width="236px" alt="" />
                                </div>
                                <div className='my-auto '>
                                    <div className='flex'>
                                        <h6 className='font-medium text-2xl mr-4'>UPDATES</h6>
                                        <p className='text-zinc-500 mt-[5px] font-sans' >Mar 13.2020</p>
                                    </div>
                                    <div className='w-[400px] text-left'>
                                        <h4 className='font-sans text-3xl'>Start your day properly with the hottest novelties</h4>
                                    </div>
                                </div>
                            </div>




                        </div>
                        {/* right */}
                    </div>
                </div>
                {/* title */}
            </div>
            {/*end content 3 */}
        </div>
    )
}

export default Homepage