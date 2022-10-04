import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <section className='blog-and-news px-4'>
            <h2>Blogs and News</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="" className='blog-and-news'>
                <div className="common-blog">
                    <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/09/blog-01-600x480.jpg" alt="" />
                    <span>
                        25 sep 2022
                    </span>
                    <div className="blog-details">
                
                    <p>Doctor</p>
                    <h5>5 Great reasons to use an online doctor</h5>
                    <button className='btn btn-accent'>Read more</button>
                    </div>
                </div>
                </a>
        </section>
    );
};

export default Blog;