import React, {useState} from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import './Appointment.css'

const Appointment = () => {
  const [date, setDate] = useState(new Date());

    return (
        <div className='flex items-start justify-evenly'>
          <AppointmentBanner className='base-100 shadow-xl' date={date} setDate={setDate}/>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <AvailableAppointment date={date} setDate={setDate} />
            </div>
          </div>
        </div>
    );
};

export default Appointment;