import React, {useState} from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import './Appointment.css'

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  let stringDate = date.toDateString();
    return (
        <div>
          <AppointmentBanner date={date} setDate={setDate}/>
          <AvailableAppointment date={date} setDate={setDate} />
        </div>
    );
};

export default Appointment;