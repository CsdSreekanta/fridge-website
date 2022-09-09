import React from 'react';
import walton from '../images/walton.jpg'

const Home = () => {
    return (
       <div>
         <div className='grid grid-cols-1 mt-5 p-4 md:grid-cols-2'>
            <div className="mt-32 sm:order-last border-4">
                <h1 className='text-6xl font-bold font-mono text-orange-500'>Decs Technology Retains Natural Freshness</h1>
                <p className='text-xl mt-6 font-bold font-serif'>Welcome to an experience of freshness. WALTON Direct Cool Refrigerators are equipped with 100% copper condensers and Nano technology to take care of your evolving needs and at the same time, maintain the quality of the food that you preserve. Our simple and contemporary designs will surely complement your lifestyle.</p>
                <button className='mt-10 font-bold text-xl text-white bg-orange-500 px-8 py-3 rounded shadow-lg'>For Details</button>
            </div>
            <div className =" md:order-last border-4">
            <img className='h-screen pl-28' src={walton} alt="" />
            </div>
        </div>
        <div>
            <h1 className='text-center text-3xl font-bold text-orange-500 p-4'> Customer Review (3)</h1>
        </div>
       </div>
        
    );
};

export default Home;