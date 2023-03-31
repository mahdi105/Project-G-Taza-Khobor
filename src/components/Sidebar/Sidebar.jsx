import React from 'react';

const Sidebar = () => {
    return (
        <aside className='col-span-4'>
            <section className='mb-6 py-5 px-12 bg-[rgba(96,71,236,0.1)] rounded-md border border-[rgba(96,71,236,1)]'>
                <p className='text-center text-[rgba(96,71,236,1)] font-bold text-xl'>Spent time on read: {}100 min</p>
            </section>
            <section className='p-7 bg-slate-100 rounded-md'>
                <h2 className='font-bold text-xl mb-4'>Bookmarked Blogs: 8</h2>
                
            </section>
        </aside>
    );
};

export default Sidebar;