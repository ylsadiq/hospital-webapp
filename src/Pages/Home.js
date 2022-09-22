import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Shared/Navbar';
import './Home.css'
const Home = () => {
    return (
        <div className='px-4'>

           <div className='header-content'>
           <Navbar />
           <Banner />
           </div>
        </div>
    );
};

export default Home;