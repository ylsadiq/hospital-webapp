import { faFacebook, faGoogle, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FooterCopyRight.css'

function FooterCopyRight() {
  return (
    <section className="footerCopyRight">
      <div className="container">
      <div className='footer-section px-8'>
            <div className="container">
            <div className="grid gap-4 grid-cols-3 py-2">
                <div className="flex flex-col justify-start">
                    <div className="footer-logo">
                         <img src="https://i.ibb.co/9ZQ2QkQ/Group-1.png" alt="" />
                     </div>
                     <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                     <div className="social-icon py-2">
                     <FontAwesomeIcon icon={faFacebook} />
                     <FontAwesomeIcon icon={faInstagram} />
                     <FontAwesomeIcon icon={faGoogle} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faYoutube} />
                     </div>
                </div>

                <div className="grid gap-4 grid-cols-1">
                    <div className="quick-links-section">
                    <h5 className='secondary py-2 '>Quick Links</h5>
                    <ul className='footer-items'>
                        <li className='footer-item'><a className='footer-link' href="">About Us</a></li>
                        <li className='footer-item'><a className='footer-link' href="">Our Pricing</a></li>
                        <li className='footer-item'><a className='footer-link' href="">Our Gallery</a></li>
                        <li className='footer-item'><a className='footer-link' href="">Appointment</a></li>
                        <li className='footer-item'><a className='footer-link' href="">Privacy Policy</a></li>
                    </ul>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-1">
                    <h5 className='secondary ms-4'>Opening Hours</h5>
                    <ul className='quick-links'>
                        <li className='quick-times'><span>Mon- Tue </span>08:00 AM- 05:00 PM</li>
                        <li className='quick-times'><span>Wed- Thu </span>09:00 AM- 06:00 PM</li>
                        <li className='quick-times'><span>Fri- Sat </span>10:00 AM- 07:00 PM</li>
                        <li className='quick-times'><span>Sunday </span>Emergency Only</li>
                        <li className='quick-times'><span>Personal </span>Mon- 05:00 PM </li>
                    </ul>
                </div>
                </div>
             </div> 
         </div>
         <div className='border w-2/4 mx-auto'></div>
         <p className='text-center'>Copyright&copy;2022 Medicom All Rights Reserved</p>
      </div>
    </section>
  )
}

export default FooterCopyRight