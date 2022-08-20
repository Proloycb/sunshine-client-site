import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({course}) => {
    const {_id, img, name, duration, price, description} = course;
    const navigate = useNavigate();
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <p><small>Duration: {duration}</small></p>
            <p><small>Price: ${price}</small></p>
            <div className="card-actions justify-end">
                <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default Service;