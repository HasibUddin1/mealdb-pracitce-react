import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-10 py-5 bg-slate-900 text-white'>
            <div>
                <h1 className='text-4xl font-semibold'>Navbar</h1>
            </div>
            <div>
                <div className='flex gap-5 anchors'>
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;