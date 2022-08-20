import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Service from './Service';


const Services = () => {
    const { data: courses, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services')
        .then(res => res.json())
    )

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='mt-3'>
            <h4 className='text-3xl text-secondary text-center font-bold mb-8'>Our Courses</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-28'>
                {
                    courses?.map(course => <Service
                        key={course._id}
                        course={course}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;