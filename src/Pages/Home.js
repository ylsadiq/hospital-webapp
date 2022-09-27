import React from 'react';
import Navbar from './Shared/Navbar';
import './Home.css'
import Services from './Services/Services';
const Home = () => {

    return (
        <div>
           <div className='header-content'>
           <Navbar />
           </div>
           <div className="services">
            <Services />
           </div>
        </div>
    );
};

export default Home;