import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <section className='blogs-and-news px-4'>
            <h5>Learn more</h5>
            <h2>Blogs and News</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="common-blog grid grid-cols-4 gap-3">
                    <div className="blog-news">
                    <div className="blog-img">
                    <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/09/blog-01-600x480.jpg" alt="" />
                    </div>
                    <span className='blog-img-batch'>
                        <p>25 sep 2022</p>
                    </span>
                    </div>
                    <div className="blog-details">
                    <h5>5 Great reasons to use an online doctor</h5>
                    <h3>we care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu hendrerit ex. Quisque imperdiet vel odio nec scelerisque.</p>
                    <button className='btn btn-accent'>Read more</button>
                    </div>
                    <div className="blog-news">
                    <div className="blog-img">
                    <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/09/blog-01-600x480.jpg" alt="" />
                    </div>
                    <span className='blog-img-batch'>
                        <p>25 sep 2022</p>
                    </span>
                    </div>
                    <div className="blog-details">
                    <h5>5 Great reasons to use an online doctor</h5>
                    <h3>we care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu hendrerit ex. Quisque imperdiet vel odio nec scelerisque.</p>
                    <button className='btn btn-accent'>Read more</button>
                    </div>
                </div>
        </section>
    );
};

export default Blog;