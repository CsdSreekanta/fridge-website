import React from 'react';

const Details = ({product}) => {
    const {name, Rating, picture, review} = product

    return (
        <div className='border border-orange-400 p-3 rounded shadow-lg font-bold w-3/4 m-auto'>
            <img className='h-40 w-48 m-auto rounded-lg' src={picture} alt="" />
            <h1 className='text-2xl text-blue-500 mt-10'>{name}</h1>
            <p>{review}</p>
            <h2>Rating:{Rating}</h2>
            
        </div>
    );
};

export default Details;