import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Blogs = () => {
    // USE STATE Hook
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([])
    const notify = ()=>{
        toast.warn("Already Bookmarked!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    const handleBookmark = (blog)=>{
        let newBookmarks = [];
        const existmark = bookmarks.find(bookmark => bookmark.id === blog.id)
        if(!existmark){
            newBookmarks = [...bookmarks,blog];
            setBookmarks(newBookmarks);
        }else{
            notify();
        }
        
    }
    console.log(bookmarks);
    // USE EFFECT Hook
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
            <Sidebar bookmarks={bookmarks}></Sidebar>
        </main>
    );
};

export default Blogs;