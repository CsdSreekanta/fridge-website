import React from 'react';
import error from '../images/error.png'

const NotFound = () => {
    return (
        <div className='text-center mt-20'>
            <img className='border-4 m-auto ' src={error}alt="" />
            <h1 className="text-2xl font-bold text-red-600">Not Found</h1>
        </div>
    );
};

export default NotFound;