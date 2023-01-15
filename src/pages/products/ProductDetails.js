import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData()

    return (
        <div className="hero h-full" style={{ backgroundImage: `url(${data?.img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">{data?.title}</h1>
                    <p className="mb-5">{data?.description}</p>
                    <p className="mb-5 font-semibold">Price: {data?.price}$</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;