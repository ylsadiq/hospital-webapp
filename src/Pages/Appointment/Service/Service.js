import React from 'react';
import { useState } from 'react';
import './Service.css'
const Service = ({service, setTreatment, treatment}) => {
    const {name, slots} = service;
    const [isActive, setIsActive] = useState(false);
    // const handleSelected = () =>{
        
    // }
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
    return (
            <>
            <button>
            <div className="card shadow-xl h-full" style={{ backgroundColor: isActive ? "#10816F" : "white" , color: isActive ? "white" : "#10816F" }}>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
                <p>{
            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p>{slots?.length} {slots?.length > 1 ? 'spaces' : 'space'} available</p>
            <div className="card-actions justify-center">
            <label onClick={() => handleTreatment(service)} disabled={slots.length === 0} className="btn btn-primary">Book Appointment</label>
            </div>
            </div>
            </div>
            </button>
            </>
    );
};

export default Service;