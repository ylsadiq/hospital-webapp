import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './AppointmentBanner.css'

const AppointmentBanner = ({date, setDate}) => {
    const disabledDays = [
        { from: new Date(date)}
      ];
    return (
        <div>
            <h2 className='text-center'>choose a date</h2>
            <div className='day-pick'>
            <DayPicker
      mode="single"
      disabled={disabledDays}
      selected={date}
      onSelect={setDate}
    /> 
        </div>
    <p>Please pick a day.{format(date, 'PP')}</p>
        </div>
    );
};

export default AppointmentBanner;