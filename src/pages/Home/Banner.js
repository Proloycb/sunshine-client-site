import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/N1GrZJP/online759.jpg" className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-4xl font-bold">Welcome to our<span className='text-primary'> Ed-Tech</span> courses</h1>
                    <p className="py-6">There are all of courses for develop your skill. You will need this courses please register and enrolled course.</p>
                    <Link to="/login" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;