import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="p-5">
                <img src={product?.img} alt="Shoes" className="rounded-xl h-44 w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product?.title}</h2>
                <p>{product?.description.slice(0, 55)}...</p>
                <div className="card-actions">
                    <Link className='btn btn-primary' to={`/product/${product._id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;