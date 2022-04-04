import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='flex gap-5 justify-center bg-teal-400 p-4 text-xl font-mono font-bold'>
                <a href="/">HOME</a>
                <a href="/reviews">REVIEWS</a>
                <a href="/dashboard">DASHBOARD</a>
                <a href="/blogs">BLOGS</a>
                <a href="/about">ABOUT</a>
            </nav>
        </div>
    );
};

export default Header;