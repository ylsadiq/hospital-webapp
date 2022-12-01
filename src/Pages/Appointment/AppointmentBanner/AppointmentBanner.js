import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { motion } from "framer-motion";
import './AppointmentBanner.css'

const AppointmentBanner = ({date, setDate}) => {
    const disabledDays = [
        { from: new Date(date)}
      ];
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        >
            <h2 className='text-center'>choose a date</h2>
            <div className='day-pick'>
            <DayPicker
      mode="single"
      disabled={disabledDays}
      selected={date}
      onSelect={setDate}
    /> 
        </div>
    <p className='text-center'>Please pick a day <span className='font-semibold'>{format(date, 'PP')}</span></p>
        </motion.div>
    );
};

export default AppointmentBanner;