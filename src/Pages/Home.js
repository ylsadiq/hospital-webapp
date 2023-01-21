import React from 'react';
import OurProcess from './OurProcess/OurProcess';
import Blog from './BlogAndNews/Blog';
import FAQ from './FAQ/FAQ';
import Footer from './Shared/Footer/Footer';
import './Home.css';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <div className='header-content'>
            <Banner />
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