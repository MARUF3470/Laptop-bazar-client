import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Addproduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleProduct = (data) => {
        if (data.description.length < 100) {
            return toast((t) => (
                <span className='text-sm'>
                    You description should have atleast 100 charecters
                    <button className='btn btn-error btn-circle btn-xs ml-2' onClick={() => toast.dismiss(t.id)}>
                        X
                    </button>
                </span>
            ));
        }
        const imgKey = process.env.REACT_APP_imgkey
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    const product = {
                        title: data.title,
                        img: imgdata.data.url,
                        description: data.description
                    }
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(data)
                                return toast.success('Product is added')
                            }
                        })
                }
            })
    }
    return (
        <div className='flex items-center justify-center h-full from-red-100 via-red-300 to-blue-500 bg-gradient-to-br px-4'>
            <div className="p-4 items-center justify-center w-full lg:w-2/5 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <form onSubmit={handleSubmit(handleProduct)} className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Title</span>
                    </label>
                    <input {...register('title', { required: 'Provide a title for the product' })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    {errors.title && <p className='text-sm text-red-500 mt-1'>{errors.title.message}</p>}
                    <textarea {...register('description', { required: 'Provide product description' })} className="textarea textarea-bordered w-full mt-2" placeholder="Type product description"></textarea>
                    {errors.description && <p className='text-red-500 mt-1 text-sm'> {errors.description.message}</p>}
                    <div className='flex items-center gap-3 mt-2'>
                        <div className="shrink-0">
                            <img className="object-cover w-16 h-16 rounded-full" src="https://e7.pngegg.com/pngimages/637/822/png-clipart-font-awesome-upload-computer-icons-font-computers-blue-text.png" alt="profile" />
                        </div>
                        <label className="block">
                            <span className="sr-only">Choose File</span>
                            <input type="file" {...register('img', { required: 'You need to upload product picture' })}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </label>
                    </div>
                    {errors.img && <p className='text-red-500 mt-1 text-sm'>{errors.img.message}</p>}
                    <div className='flex justify-center items-center mt-4'>
                        <input type="submit" className='btn btn-primary w-1/3' value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addproduct;