import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    return (
        <div className='h-screen mt-5'>
            <h2 className='text-3xl text-center'>Your course enrollment are successfully completed id: <span className='text-green-400'>{id}</span></h2>
        </div>
    );
};

export default Purchase;