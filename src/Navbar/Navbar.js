import React from 'react';
import './Navbar.css'

const navbar = () => {
    return (
        <div className='nav bg-blue-600 p-4 shadow-lg'>
            <a href="">Home</a>
            <a href="">Review</a>
            <a href="">Dashboard</a>
            <a href="">Blogs</a>
            <a href="">About</a>
        </div>
    );
};

export default navbar;