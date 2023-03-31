import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[]);
    return (
        <main className='xl:px-10 container mx-auto grid grid-cols-1 md:grid-cols-10 gap-6'>
            <section className='col-span-7'>
                {
                    blogs.map((blog) => <Blog blog={blog} key={blog.id}></Blog>)
                }
            </section>
            <aside className='col-span-3 bg-slate-100'>
                <p>Learn From Beginning</p>
            </aside>
        </main>
    );
};

export default Blogs;