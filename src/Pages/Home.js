import React from 'react';
import Navbar from './Shared/Navbar';
import './Home.css'
import Services from './Services/Services';
import OurProcess from './OurProcess/OurProcess';
import Blog from './BlogAndNews/Blog';
import FAQ from './FAQ/FAQ';
import Footer from './Shared/Footer/Footer';
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
            <FAQ />
           </div>
           <div className="footer">
            <Footer />
           </div>
        </div>
    );
};

export default Home;