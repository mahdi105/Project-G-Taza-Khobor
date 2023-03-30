import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <section className='container xl:px-10 py-5 mx-auto flex justify-between items-center border-b border-slate-200'>
                <h1 className='text-cyan-950 font-bold text-3xl'>Taza Khobor</h1>
                <div className='flex justify-end gap-20 items-center'>
                    <div className='flex justify-end items-center gap-6 text-cyan-950 text-lg'>
                        <a href="" className='hover:text-rose-600'>E-potrika</a>
                        <a href="" className='hover:text-rose-600'>Live show</a>
                        <a href="" className='hover:text-rose-600'>Login</a>
                    </div>
                    <div>
                        <img id='logo' src={logo} className="w-12 h-12" alt="" />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;