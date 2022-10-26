import React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Service from '../Service/Service';
import BookingModal from './BookingModal/BookingModal';
import { useQuery } from 'react-query'
import './AvailableAppointment.css';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({});
    const formattedDate = format(date, 'PP');
    const { isLoading, refetch, error, data: services } = useQuery(['available', formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )
   if (isLoading) return <Loading></Loading>
 
   if (error) return 'An error has occurred: ' + error.message
    // useEffect(() =>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])
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
            {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} refetch={refetch} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;