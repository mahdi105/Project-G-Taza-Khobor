import React from 'react';

const Sidebar = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <aside className='col-span-4'>
            <section className='mb-6 py-5 px-12 bg-[rgba(96,71,236,0.1)] rounded-md border border-[rgba(96,71,236,1)]'>
                <p className='text-center text-[rgba(96,71,236,1)] font-bold text-xl'>Spent time on read: {}100 min</p>
            </section>
            <section className='p-7 bg-slate-100 rounded-md'>
                <h2 className='font-bold text-2xl mb-4'>Bookmarked Blogs: {bookmarks.length}</h2>
                <div className='grid grid-cols-1 gap-5'>
                    {
                        bookmarks.map(bookmark => <h2 className='bg-white p-5 rounded-md font-semibold text-xl'>{bookmark.title}</h2>)
                    }
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;