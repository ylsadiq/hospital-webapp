import React from 'react';
import Navbar from './Shared/Navbar';
import './Home.css'
import Services from './Services/Services';
import OurProcess from './OurProcess/OurProcess';
import Blog from './BlogAndNews/Blog';
const Home = () => {

    return (
        <div>
           <div className='header-content'>
           <Navbar />
           </div>
           <div className="services">
            <Services />
            <OurProcess />
           </div>
           <div className="blog">
            <Blog />
           </div>
        </div>
    );
};

export default Home;