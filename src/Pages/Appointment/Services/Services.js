import React, { useState } from 'react';
import './Services.css'
const Services = ({service, setTreatment, treatment}) => {
    const {name, slots, service_image, image} = service;
    const [isActive, setIsActive] = useState(false);
    const handleTreatment = (service) =>{
        setTreatment(service);
            setIsActive(!isActive);
        // setIsActive(current => (!current));
        // if(selected && selected.length > 1){
        //     return null
        // }else{
        //         setSelected(1)
        //     }
    }
    
    var Diamond6 = require('../../../images/brace.png');
    var Diamond2 = require('../../../images/adjust-tooth.png');
    var Diamond3 = require('../../../images/clear-tooth.png');
    var Diamond7 = require('../../../images/dental-care.png');
    var Diamond5 = require('../../../images/gabity-tooth.png');
    var Diamond8 = require('../../../images/tooth-whitening.png');
    var Diamond4 = require('../../../images/dental-implant.png');
    var Diamond = require('../../../images/happy-tooth.png');

    return (
        <section className='service-section px-4'>
            <div className='common-service'>
                <span className='common-img'>
                    <img src={service_image} alt="" />
                </span>
                <div className="overlay">
                </div>
                <div className="service-card">
                <h5>Teeth</h5>
                <h3>{name}</h3>
                <h6>6 Doctors</h6>
                <p>{
            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>
                }</p>
                <button onClick={() => handleTreatment(service)} disabled={slots.length === 0}> Book Now</button>
                </div>
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