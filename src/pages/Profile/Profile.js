import React from 'react';
import { FaMobileAlt } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import { TfiEmail } from 'react-icons/tfi'
import { BsWhatsapp, BsGithub } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'

const Profile = () => {
    return (
        <div>
            <div className='border-y-4 border-gray-800  my-10'>
                <div className='py-16 lg:flex justify-between w-11/12 mx-auto'>
                    <h1 className='text-5xl font-semibold'>Contact</h1>
                    <p>Get in Touch</p>
                </div>
            </div>
            <div className='my-10'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.919544743825!2d90.39929777419457!3d23.892471483309496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4453f44ee37%3A0xc5ca99a2db987f01!2sStation%20Road%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1670678343130!5m2!1sen!2sbd" className='w-11/12 h-56 mx-auto' loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto'>
                <div>
                    <div className='my-4'>
                        <div className='flex gap-8 items-center'>
                            <FaMobileAlt className='text-3xl text-blue-700'></FaMobileAlt>
                            <p>01786580192</p>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className='flex gap-8 items-center'>
                            <BsWhatsapp className='text-3xl text-blue-700'></BsWhatsapp>
                            <p>01872129989</p>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className='flex gap-8 items-center'>
                            <GrMapLocation className='text-3xl text-blue-700'></GrMapLocation>
                            <p>Tongi, Station-road, Gazipur, Dhaka</p>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className='flex gap-8 items-center'>
                            <TfiEmail className='text-3xl text-blue-700'></TfiEmail>
                            <p>smmaruf25@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-14'>
                        <a className='text-3xl text-blue-400' href="https://www.linkedin.com/in/s-m-maruf-hossain/"><FiLinkedin></FiLinkedin></a>
                        <a className='text-3xl text-blue-400' href="https://github.com/MARUF3470"><BsGithub></BsGithub></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;