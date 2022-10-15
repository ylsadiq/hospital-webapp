import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
            <div className="service">
            <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>
                    }</p>
                <p>{slots?.length} {slots?.length > 1 ? 'spacs' : 'space'} available</p>
                <div className="card-actions justify-end">
                <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary modal-button">open modal</label>
                </div>
            </div>
            </div>
            </div>
    );
};

export default Service;