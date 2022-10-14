import React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Service from '../Service/Service';
import './AvailableAppointment.css'
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({})
    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>Available Appointment On {format(date, 'PP')}</h2>
            <div  className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
                {
                    services.map(service =><Service key={service._id}
                        setTreatment={setTreatment}
                        service={service}/>)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;