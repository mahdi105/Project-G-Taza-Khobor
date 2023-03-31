import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Blogs = () => {
    // USE STATE Hook
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [readTime, setReadTime] = useState(0);
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
    const handleReadTime = (time)=>{
        const newReadTime = readTime + time;
        setReadTime(newReadTime)
    }
    console.log("Read Time One",readTime);
    // USE EFFECT Hook
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[]);
    return (
        <main className='px-2 xl:px-10 container mx-auto grid grid-cols-1 md:grid-cols-11 gap-7'>
            <section className='md:col-span-7'>
                {
                    blogs.map((blog) => <Blog handleReadTime={handleReadTime} blog={blog} key={blog.id} handleBookmark={handleBookmark}></Blog>)
                }
            </section>
            <Sidebar bookmarks={bookmarks} readTime={readTime}></Sidebar>
        </main>
    );
};

export default Blogs;