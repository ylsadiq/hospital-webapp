import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
            <section className="hero-section mt-10">
                <div className="container">
                <div className="hero-container flex justify-items-center justify-between">
  <div className='w-3/5 text-left'>
      <h1 className="text-5xl font-bold"><span className='block'>Your <span className='text-sky-400'>Health</span> is Our</span>  Top <span className='text-blue-500'>Priority</span></h1>
      <p className="py-6 text-lg">There are many variations of passages of lpsum available, but the majority hae suffered.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
        <div className='w-2/5'>
        <div class="outer_circle">
                        <div class="inner_circle">
                        <div className="inner-img">
                        <img src="https://i.ibb.co/fFzmyXP/pose-2.png" alt="pose-2" />
                        </div>
                        </div>
                        <button> <FontAwesomeIcon icon={faCircleCheck} /> Regular checkup</button>
                    </div>
        </div>
  </div>
                </div>
</section>
    );
};

export default Banner;