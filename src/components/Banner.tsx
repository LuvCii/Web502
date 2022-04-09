import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade, Slide } from 'react-slideshow-image';


const slideImages = [
    {
        url: 'https://writer.ancorathemes.com/wp-content/uploads/2022/02/slider-1-slide-1.jpg',
        caption: 'Find New Life-changing Ideal with Us'
    },
    {
        url: 'https://writer.ancorathemes.com/wp-content/uploads/2022/02/slider-1-slide-2.jpg',
        caption: 'Get Lastest Bestsellers or True Classics'
    },
    {
        url: 'https://writer.ancorathemes.com/wp-content/uploads/2022/02/slider-1-slide-3.jpg',
        caption: 'Online Search Tools for Librarians'
    },
];

const Banner = () => {
    return (
        <div className="relative pt-52 slide-container w-[1780px] mx-auto">
            {/* <Slide> */}
            <Fade>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide w-[1780px] mx-auto" key={index}>
                        <div className='h-[634px] mx-auto w-[1780px] rounded-lg ' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <h1 className='px-12 pt-[200px] text-white text-9xl text-shadow-xl font-bold'>{slideImage.caption}</h1>
                        </div>
                    </div>
                ))}
            </Fade>
            {/* </Slide> */}
        </div>
    )
}

export default Banner