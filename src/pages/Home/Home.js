import React from 'react';
import pic1 from '../../components/images/Samsung-Galaxy-Book-2-Pro-360-1.webp'
import pic2 from '../../components/images/QHtKydULjSL3jipwKUSMwD.jpg'
import pic3 from '../../components/images/maxresdefault.webp'
import pic4 from '../../components/images/1563590510_swift_7_1.jpg'
import pic5 from '../../components/images/hero_startframe__gfzn6m1jpf6u_large_2x.jpg'
import Banner from './Banner';
import Products from '../products/Products';

const Home = () => {
    const bannarData = [
        {
            image: pic1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: pic2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: pic3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: pic4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: pic5,
            prev: 4,
            id: 5,
            next: 1
        },

    ]
    return (
        <div>
            <div className="carousel w-11/12 mx-auto my-2 lg:h-2/5">
                {
                    bannarData.map(slide => <Banner key={slide.id} slide={slide}></Banner>)
                }
            </div>
            <div className='mt-10 w-11/12 mx-auto'>
                <h1 className='text-center text-3xl font-semibold'>Our Products</h1>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;