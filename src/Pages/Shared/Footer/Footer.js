import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className='footer-section px-4'>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="footer-contract">
                    <div className="contract-now">
                        <h5 className='my-1.5'>Get in touch</h5>
                        <h2 className='my-3'>Contact us now</h2>
                        <p className='my-1.5'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from React.</p>
                    </div>
                    <div className="emergency-contract grid grid-cols-2 gap-4">
                        <div className="emergency">
                        <FontAwesomeIcon icon={faHouseMedical} />
                            <div className="emergency-details">
                            <h5>EMERGENCY CONTACT</h5>
                            <p>Free call 24/7</p>
                            <p>+1555 6761 020</p>
                            </div>
                        </div>
                        <div className="home-visit">
                        <FontAwesomeIcon icon={faUserDoctor} />
                        <div className="home-details">
                            <h5>HOME VISIT</h5>
                            <p>Chargeable call 24/7</p>
                            <p>+1777 6761 050</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <div className="social-heading grid grid-cols-2 gap-2">
                    <div className="tooth-whiting mt-3">
                        <div className="tooth-white">
                        <h2>Teeth <span className='block'>whitening</span></h2>
                        <img src="https://i.ibb.co/s5vqHQ4/footer-img.png" alt="" />
                        </div>
                    </div>
                    <div className="action">
                    <h5 className='my-1'>Follow us</h5>
                        <h2 className='my-3'>Our Activity</h2>
                        <p className='my-1'>Organically grow the holistic world view of innovation empowerment.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;