import React from 'react';
import './Services.css'
const Services = () => {
    var Diamond = require('../../images/brace.png');
    var Diamond2 = require('../../images/adjust-tooth.png');
    var Diamond3 = require('../../images/clear-tooth.png');
    var Diamond4 = require('../../images/dental-care.png');
    var Diamond5 = require('../../images/gabity-tooth.png');
    var Diamond6 = require('../../images/tooth-whitening.png');

    return (
        <section className='service-section px-4'>
            <h2 className='text-accent'>Services For Your Health</h2>
            <div class="grid grid-cols-4 gap-5">
            <a href="">
            <div className='common-service'>
                <span className='common-img'>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_192351722-320x200.jpg" alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                <h5>Teeth</h5>
                <h3>DENTAL SERVICES</h3>
                <h6>6 Doctors</h6>
                <p></p>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                            <span>
                                <img src={Diamond} alt="" />
                            </span>
                    </div>
                </div>
            </div>
            </a>
            <a href="">
            <div className='common-service'>
                <span className='common-img'>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_227481766-320x200.jpg" alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                <h5>If you lost yours</h5>
                <h3>IMPLANTS</h3>
                <h6>3 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                            <span>
                                <img src={Diamond2} alt="" />
                            </span>
                    </div>
                </div>
            </div>
            </a>
            <a href="">
            <div className='common-service'>
                <span className='common-img'>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_270756593-320x200.jpg" alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                    <h5>Cosmetic</h5>
                <h3>DENTISTRY</h3>
                <h6>2 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                    <span>
                        <img src={Diamond3} alt="" />
                    </span>
                    </div>
                </div>
            </div>
            </a>
            <a href="">
            <div className='common-service'>
                <span className='common-img'>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_156787064-320x200.jpg" alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                <h5>The best solution</h5>
                <h3>DENTAL BRIDGES</h3>
                <h6>2 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                    <span>
                        <img src={Diamond4} alt="" />
                    </span>
                    </div>
                </div>
            </div>
            </a>
            <a href="">
            <div className='common-service'>
                <span className='common-img'>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_142427935-320x200.jpg" alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                <h5>Painless fixes</h5>
                <h3>CROWNS</h3>
                <h6>4 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                    <span>
                        <img src={Diamond5} alt="" />
                    </span>
                    </div>
                </div>
            </div>
            </a>
            <a href="">
            <div className='common-service'>
                <span className='common-img'>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_124314160-320x200.jpg" alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                <h5>Line them all up</h5>
                <h3>INVISALIGN</h3>
                <h6>5 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                    <span>
                        <img src={Diamond6} alt="" />
                    </span>
                    </div>
                </div>
            </div>
            </a>
            <a href="">
            <div className='common-service'>
                <span className='common-img'>
                    <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_118733071-320x200.jpg" alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                <h5>Porcelain</h5>
                <h3>VENEERS</h3>
                <h6>7 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                            <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2022/03/icon6.png" alt="" />
                    </div>
                </div>
            </div>
            </a>
            <a href="">
            <div className='common-service'>
                <div className="overlay">
                <span>
                <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2022/03/icon6.png" alt="" />
                </span>
                </div>
                <div className="service-card">
                <h5>Beautify your smile</h5>
                <h3>TEETH WHITENING</h3>
                <h6>4 Doctors</h6>
                <button class="btn">Explore</button>
                </div>
                <div className="service-inner-box">
                    <div className="inner-img">
                            <img src="https://doccure-wp.dreamguystech.com/wp-content/uploads/2022/03/icon6.png" alt="" />
                    </div>
                </div>
            </div>
            </a>
           
</div>
        </section>
    );
};

export default Services;