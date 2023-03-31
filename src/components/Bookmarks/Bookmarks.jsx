import React from 'react';

const Bookmarks = ({bookmarks}) => {
    return (
        <section className='p-7 bg-slate-100 rounded-md'>
            <h2 className='font-bold text-2xl mb-4'>Bookmarked Blogs: {bookmarks.length}</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    bookmarks.map(bookmark => <h2 key={bookmark.id} className='bg-white p-5 rounded-md font-semibold text-xl'>{bookmark.title}</h2>)
                }
            </div>
        </section>
    );
};

export default Bookmarks;