import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faHouseMedical, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { motion, Variants } from "framer-motion"
import './OurProcess.css'

const OurProcess = () => {

    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
        y: 0,
        opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.3
          }
        }
      };

    return (
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <motion.div
        variants={cardVariants}
        className='card card-container our-process px-4 py-6'>
            <div className='mb-5'>
            <h5>
                How we do it?
                </h5>
                
            <h2>Our Process</h2>
                </div>
            <div className="process grid grid-cols-3 gap-4">
                <div className="heart-pulse">
                <a href="">
                <div className="main-circle">
                <span className='circle-icons'>
                        <FontAwesomeIcon icon={faHeartPulse}/>
                        </span>
                <div className='inner-circle'>
                
                    </div>
                </div>
                </a>
                <h6>What we do</h6>
                <h4>we care about you</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus felis sed consequat sodales. Proin pulvinar rhoncus bibendum. In mollis magna.</p>
                </div>
                <div className="medical-house">
                <a href="">
                <div className="main-circle">
                <span className='circle-icons'>
                <FontAwesomeIcon icon={faHouseMedical}/>
                        </span>
                <div className='inner-circle'>
                
                    </div>
                </div>
                </a>
                <h6>we give you</h6>
                <h4>Medical Advices</h4>
                <p>Nam et augue ipsum. Duis maximus sagittis pulvinar. Aliquam erat lorem, tempus a placerat vel, tristique eget est. Pellentesque habitant morbi tristique senectus.</p>
                </div>
                <div className="medical-truck">
                <a href="">
                <div className="main-circle">
                <span className='circle-icons'>
                <FontAwesomeIcon icon={faTruckMedical}/>
                        </span>
                <div className='inner-circle'>
                
                    </div>
                </div>
                </a>
                <h6>we offer professional</h6>
                <h4>Medical Services</h4>
                <p>Proin ultrices, lorem ac maximus laoreet, ante neque viverra libero, non auctor leo eros vel lorem. Morbi dictum consectetur tristique.</p>
                </div>
            </div>
        </motion.div>
        </motion.div>
    );
};

export default OurProcess;