import React from 'react';

const Blog = (props) => {
    const {id,avatar, thumbnail, title, author, published_in,read_time,link} = props.blog;
    return (
        <>
        <article>
            <div className='mb-8'>
                <img className='w-full h-96 rounded-lg border border-slate-200' src={thumbnail} alt="" />
            </div>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex justify-start gap-3 items-center'>
                        <div>
                            <img className='w-11 h-11 rounded-full' src={avatar} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold'>{author}</h3>
                            <p className='text-lg text-zinc-600 font-semibold'>{published_in}</p>
                        </div>
                    </div>
                    <div className='flex justify-end items-center gap-3'>
                        <span className='text-xl text-zinc-600'>{read_time?read_time + " min read":'0 min read'}</span>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#52525B" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <h1 className='mb-5 text-4xl font-bold text-cyan-950'>{title}</h1>
                <div className='flex justify-start gap-5 mb-9'>
                    <button className='underline decoration-solid text-[#6047EC] text-xl font-semibold'>Mark as read</button>
                    <button className=' bg-cyan-950 text-xl font-semibold rounded-md py-2 px-3 text-white'>Read More...
                    </button>
                </div>
            </div>
        </article>
        <hr className='w-full h-px bg-slate-200 my-8'/>
        </>
    );
};

export default Blog;