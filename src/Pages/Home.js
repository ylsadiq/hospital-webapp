import React from 'react';
import Navbar from './Shared/Navbar';
import './Home.css'
import Services from './Services/Services';
import OurProcess from './OurProcess/OurProcess';
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
        </div>
    );
};

export default Home;