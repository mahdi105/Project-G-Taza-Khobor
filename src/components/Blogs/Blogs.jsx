import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([])

    const handleBookmark = (blog)=>{
        
    }
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[]);
    return (
        <main className='xl:px-10 container mx-auto grid grid-cols-1 md:grid-cols-11 gap-7'>
            <section className='col-span-7'>
                {
                    blogs.map((blog) => <Blog blog={blog} key={blog.id} handleBookmark={handleBookmark}></Blog>)
                }
            </section>
            <Sidebar></Sidebar>
        </main>
    );
};

export default Blogs;