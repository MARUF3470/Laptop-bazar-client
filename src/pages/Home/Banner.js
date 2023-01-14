import React from 'react';
import './banar.css'
import Typewriter from 'typewriter-effect';
const Banner = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img '>
                <img src={image} alt='' className="w-screen border-none h-full lg:h-5/6 rounded-xl" />
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-3 lg:bottom-24">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 lg:left-20 top-1/3">
                <h1 className='text-lg lg:text-6xl text-white font-bold'>We sell <br /> and supply all type of laptops</h1>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 lg:left-20 top top-2/4">
                <p className='text-sm lg:text-3xl mt-3 font-semibold  text-yellow-300'>
                    <Typewriter
                        options={{
                            strings: ['Samsung', 'Asus', 'Microsoft', 'MacBook', 'Acer', 'HP'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 lg:left-20 top-3/4 hidden lg:block">
                <button className="btn btn-secondary mr-4">Contuct Us</button>
                <button className="btn btn-outline btn-warning">Latest Products</button>
            </div>
        </div >
    );
};

export default Banner;