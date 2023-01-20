import React from 'react';
import Navbar from './Shared/Navbar';
import OurProcess from './OurProcess/OurProcess';
import Blog from './BlogAndNews/Blog';
import FAQ from './FAQ/FAQ';
import Footer from './Shared/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
           <div className='header-content'>
           <Navbar />
           </div>
           <div className="services">
            <OurProcess />
            <Blog />
           </div>
           <div className="blog">
            <FAQ />
            <Footer />
           </div>
           <div className="footer">
    
           </div>
        </div>
    );
};

export default Home;