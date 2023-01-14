import React from 'react';

const Addproduct = () => {
    return (
        <div className='flex items-center justify-center min-h-screen from-red-100 via-red-300 to-blue-500 bg-gradient-to-br px-4'>
            <div className="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
            </div>
        </div>
    );
};

export default Addproduct;