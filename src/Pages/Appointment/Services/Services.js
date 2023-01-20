import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import './Services.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Services = ({service, setTreatment, treatment}) => {
    const {name, slots, service_image, image} = service;
    const [isActive, setIsActive] = useState(false);
    const handleTreatment = (service) =>{
        setTreatment(service);
            setIsActive(!isActive);
    }

    return (
        <section className='service-section'>
            <div
            isSelected={true}
            className='common-service'>
                <span className='common-img'>
                    <img src={service_image} alt="" />
                </span>
                <motion.div className="overlay">
                </motion.div>
                <motion.div
            className="service-card">
                <motion.h3>{name}</motion.h3>
                <motion.h6>{slots?.length} {slots?.length > 1 ? 'spaces' : 'space'} available</motion.h6>
                <motion.p>{
            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>
                }</motion.p>
                <div className="booking-btn">
                <button className='btn' onClick={() => handleTreatment(service)} disabled={slots.length === 0}>
      Book Now <span className='ml-2'><FontAwesomeIcon icon={faArrowRight}/></span></button>
                </div>
                </motion.div>
                <div className="service-inner-box">
                    <div className="inner-img">
                            <span>
                                <img src={image} alt="" />
                            </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;