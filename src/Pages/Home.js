import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Shared/Navbar';
import './Home.css'
const Home = () => {
    return (
        <div>
           <header>
           <Navbar />
           <Banner />
           </header>
        </div>
    );
};

export default Home;