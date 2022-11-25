import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BookingSlot = ({date, setDate}) => {
    let footer =  <p>{format(date, 'PP')} Available</p>;
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
    /> 
        </div>
    );
};

export default BookingSlot;