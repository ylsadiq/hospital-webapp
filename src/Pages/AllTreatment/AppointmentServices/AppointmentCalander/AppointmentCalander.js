import React from 'react';
import { format } from 'date-fns';
import {DayPicker } from 'react-day-picker';
import { useQuery } from 'react-query';

const AppointmentCalander = ({date, setDate, treatment, setTreatment, slotTime, setSlotTime}) => {
  const formattedDate = format(date, 'PP');
  const onRadiochange = (e) =>{
    const slot = e?.target?.value
    setSlotTime(slot)
  }
   const { isLoading, refetch, error } = useQuery(['available', formattedDate], () =>
    fetch(`https://hospitalwebapps-production.up.railway.app/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )
   if (isLoading) return <button className="btn loading">loading</button>
 
   if (error) return 'An error has occurred: ' + error.message

  if(!treatment === ''){
    refetch()
  }
  let footer = <p>Please pick a day.{format(date, 'PP')}</p>;
  const disabledDays = [
    { from: new Date(date)}
  ];
    return (
        <div className='flex justify-center items-center'>
          <div className='w-full flex justify-center items-center'>
          <div className="card shadow-xl image-full w-3/5">
  <div className="card-body">
  <DayPicker
      mode="single"
      disabled={disabledDays}
      selected={date}
      onSelect={setDate}
      footer={footer}
    />
    
  </div>
</div>
<div className="card shadow-xl w-2/5">
<div className="card-body scroller">
  {
    treatment?.slots?.map((slot, index) => <p className='flex justify-evenly items-center' key={index}>
      <input type="radio" value={slot} onChange={onRadiochange} name="radio-4" className="radio radio-accent" />
      {slot}</p>
      )}
  </div>
</div>

</div> 
        </div>
    );
};

export default AppointmentCalander;