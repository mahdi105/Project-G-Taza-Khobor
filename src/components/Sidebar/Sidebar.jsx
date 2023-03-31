import React from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';

const Sidebar = ({bookmarks, readTime}) => {
    return (
        <aside className='col-span-4'>
            <section className='mb-6 py-5 px-12 bg-[rgba(96,71,236,0.1)] rounded-md border border-[rgba(96,71,236,1)]'>
                <p className='text-center text-[rgba(96,71,236,1)] font-bold text-xl'>Spent time on read: {readTime} min</p>
            </section>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </aside>
    );
};

export default Sidebar;