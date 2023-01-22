import { format } from 'date-fns';
import React, { useState} from 'react';
import { useQuery } from 'react-query';


const AppointmentServices = ({date, treatment, setTreatment, setOption}) => {
    const formattedDate = format(date, 'PP');
    
    const { isLoading, refetch, error, data: services } = useQuery(['available', formattedDate], () =>
    fetch(`https://hospitalwebapps-production.up.railway.app/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )
   if (isLoading) return <button className="btn loading">loading</button>
 
   if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
             <div  className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    services.map((service, index) =>(
                        <div key={index} className="service">
                <div className="card lg:max-w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{service?.name}</h2>
                    <p>{
                        service?.slots.length > 0 ? <span>{service?.slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>
                        }</p>
                    <p>{service?.slots?.length} {service?.slots?.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-end">
                    <button onClick={() => setTreatment(service)} disabled={service?.slots.length === 0} className="btn btn-primary modal-button">Booking</button>                    
                    </div>
                </div>
                </div>
                </div>
                    ))
                }
                </div>
        </div>
    );
};

export default AppointmentServices;