import React from 'react';
import { motion } from "framer-motion"
import './Blog.css'

const Blog = () => {

    const cardVariants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
        y: 0,
        opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.3
          }
        }
      };
    return (
        <section className='blogs-and-news px-10 py-10'>
            <div className="blog-news-header">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="blog-news-healine">
            <h5>Learn more</h5>
            <h2>Blogs and News</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p>
            </motion.div>
            <div className="blog-news-explore">
                <a href="#" className='btn btn-ghost'> learn More</a>
            </div>
            </div>
                <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                <motion.div
                variants={cardVariants}
                className="common-blog grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
                    <div className="blog-news">
                    <div className="blog-img">
                    <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/09/blog-01-600x480.jpg" alt="" />
                    </div>
                    <span className='blog-img-batch'>
                        <p className="btn-ghost">25 sep 2022</p>
                    </span>
                    </div>
                    <div className="blog-details">
                    <h5>5 Great reasons to use an online doctor</h5>
                    <h3>we care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu hendrerit ex. Quisque imperdiet vel odio nec scelerisque.</p>
                    <div className="read-more text-primary">
                        Read More ...
                    </div>
                    </div>
                    <div className="blog-news">
                    <div className="blog-img">
                    <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/09/blog-01-600x480.jpg" alt="" />
                    </div>
                    <span className='blog-img-batch'>
                        <p className="btn-ghost">25 sep 2022</p>
                    </span>
                    </div>
                    <div className="blog-details">
                    <h5>5 Great reasons to use an online doctor</h5>
                    <h3>we care</h3>
                    <p className="btn-ghost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu hendrerit ex. Quisque imperdiet vel odio nec scelerisque.</p>
                    <div className="read-more text-primary">
                        Read More ...
                    </div>
                    </div>
                    <div className="blog-news">
                    <div className="blog-img">
                    <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/09/blog-01-600x480.jpg" alt="" />
                    </div>
                    <span className='blog-img-batch'>
                        <p className="btn-ghost">25 sep 2022</p>
                    </span>
                    </div>
                    <div className="blog-details">
                    <h5>5 Great reasons to use an online doctor</h5>
                    <h3>we care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu hendrerit ex. Quisque imperdiet vel odio nec scelerisque.</p>
                    <div className="read-more text-primary">
                        Read More ...
                    </div>
                    </div>
                    <div className="blog-news">
                    <div className="blog-img">
                    <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/09/blog-01-600x480.jpg" alt="" />
                    </div>
                    <span className='blog-img-batch'>
                        <p className="btn-ghost">25 sep 2022</p>
                    </span>
                    </div>
                    <div className="blog-details">
                    <h5>5 Great reasons to use an online doctor</h5>
                    <h3>we care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu hendrerit ex. Quisque imperdiet vel odio nec scelerisque.</p>
                    <div className="read-more text-primary">
                        Read More ...
                    </div>
                    </div>

                </motion.div>
                </motion.div>
        </section>
    );
};

export default Blog;