import React from 'react';
import './FullLoading.css'

const FullLoading = () => {
    return (
        <section className='loading'>
    <div className="box-container">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
    </div>
        </section>
    );
};

export default FullLoading;