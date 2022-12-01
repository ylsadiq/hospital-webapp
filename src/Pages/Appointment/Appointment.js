import React, {useState} from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import { motion } from "framer-motion";
import './Appointment.css'

const Appointment = () => {
  const [date, setDate] = useState(new Date());

    return (
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='flex items-start justify-evenly appointment-container box'>
          <AppointmentBanner className='base-100 shadow-xl' date={date} setDate={setDate}/>
          <div className="card w-full shadow-xl">
              <AvailableAppointment date={date} setDate={setDate} />
          </div>
        </motion.div>
        </motion.div>
    );
};

export default Appointment;