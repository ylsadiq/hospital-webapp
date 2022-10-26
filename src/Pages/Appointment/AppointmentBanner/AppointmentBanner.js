import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './AppointmentBanner.css'

const AppointmentBanner = ({date, setDate}) => {
    let footer = <p>Please pick a day.</p>;
    const disabledDays = [
        { from: new Date(date)}
      ];
    return (
        <div className='day-pick'>
            <DayPicker
      mode="single"
      disabled={disabledDays}
      selected={date}
      onSelect={setDate}
      footer={footer}
    /> 
        </div>
    );
};

export default AppointmentBanner;