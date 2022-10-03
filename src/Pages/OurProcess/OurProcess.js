import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faHouseMedical, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './OurProcess.css'

const OurProcess = () => {
    return (
        <section className='our-process px-4'>
            <h5>How we do it?</h5>
            <h2>Our Process</h2>
            <div className="process grid grid-cols-3 gap-4">
                <div className="heart-pulse">
                <div className="main-circle">
                <div className='outer-circle'>
                <span className='circle-icons'>
                        <FontAwesomeIcon icon={faHeartPulse}/>
                        </span>
                </div>
                <div className='inner-circle'>
                        
                    </div>
                </div>
                <h6>What we do</h6>
                <h4>we care about you</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus felis sed consequat sodales. Proin pulvinar rhoncus bibendum. In mollis magna.</p>
                </div>
                <div className="medical-house">
                <span>
                    <FontAwesomeIcon icon={faHouseMedical}/>
                </span>
                <h6>we give you</h6>
                <h4>Medical Advices</h4>
                <p>Nam et augue ipsum. Duis maximus sagittis pulvinar. Aliquam erat lorem, tempus a placerat vel, tristique eget est. Pellentesque habitant morbi tristique senectus.</p>
                </div>
                <div className="medical-truck">
                <span>
                    <FontAwesomeIcon icon={faTruckMedical}/>
                </span>
                <h6>we offer professional</h6>
                <h4>Medical Services</h4>
                <p>Proin ultrices, lorem ac maximus laoreet, ante neque viverra libero, non auctor leo eros vel lorem. Morbi dictum consectetur tristique.</p>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;