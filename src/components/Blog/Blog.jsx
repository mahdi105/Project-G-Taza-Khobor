import React from 'react';

const Blog = (props) => {
    const {id,avatar, thumbnail, title, author, published_in,read_time,link} = props.blog;
    return (
        <article>
            <div className='mb-8'>
                <img className='w-full h-96 rounded-lg border border-slate-200' src={thumbnail} alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <img src={avatar} alt="" />
                        </div>
                        <div>
                            <h3>{author}</h3>
                            <p>{published_in}</p>
                        </div>
                    </div>
                    <div>
                        <span>{read_time?read_time + " min read":'0 min read'}</span>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <h1>{title}</h1>
                <div>
                    <button>Mark as read</button>
                    <button>Read More</button>
                </div>
            </div>
        </article>
    );
};

export default Blog;