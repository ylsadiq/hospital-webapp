import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <section className='service-section px-4'>
            <h2>Services For Your Health</h2>
            <div class="grid grid-cols-6 gap-4">
            <a href="">
            <div className='common-service'>
                <div className="overlay">
                <span>
                <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2022/03/icon3.png" alt="" />
                </span>
                </div>
                <div className="service-card">
                <h3>Cardiologist</h3>
                <h6>4 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                            <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2022/03/icon3.png" alt="" />
                    </div>
                </div>
            </div>
            </a>
           
</div>
        </section>
    );
};

export default Services;