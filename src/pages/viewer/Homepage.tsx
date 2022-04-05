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
            <div className='rounded-md my-10 bg-gray-200 w-[1800px] mx-auto'>
                <div className='pt-8'>
                    <p className='font-sans text-lg'>OUR SHOP</p>
                    <h2 className='mx-auto font-medium text-6xl w-[600px]'>Read These Books &
                        Starts a New Life</h2>
                </div>
                {/* title */}
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$35</p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            Basic Tee
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$35</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* end content 2 */}
        </div>
    )
}

export default Homepage