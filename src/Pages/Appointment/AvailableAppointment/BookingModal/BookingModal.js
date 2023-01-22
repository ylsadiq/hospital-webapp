import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';
import './BookingModal.css'
import { useState } from 'react';
import BookingSlot from './BookingSlot/BookingSlot';

const BookingModal = ({treatment, date, setTreatment, refetch, slot}) => {
    const {_id, name, slots} = treatment;
    const [treatmentSlot, setTreatmentSlot] = useState('');
    const formattedDate = format(date, 'PP');
    const { register, formState: { errors, isValid } } = useForm({mode: 'all'});
    const [user, loading, error] = useAuthState(auth);
    const [option, setOption] = useState(false);
    const [formStep, setFormStep] = useState(0);
    const MAX_STEPS = 3;
    const goToPreStep = () =>{
      setFormStep(cur => cur - 1)
    }
    const completeFormStep = () =>{
      setFormStep(cur => cur + 1)
    }
    const renderBtn = () => {
      if(formStep > 2){
        return undefined
      }else if(formStep === 2){
        return(
          <button
          type='submit'  
          disabled={!isValid}
          defaultValue={option} 
          className="btn btn-primary">Finish</button>
        )
      }
      else{
        return(
          <button
          type='button'   
          onClick={completeFormStep}
          disabled={!treatment}
           className="btn btn-primary">Select Schedule</button>
        )
      }
    }
    
    const handleSlot = (slot, _id) =>{
      setTreatmentSlot(slot, _id);
    }
    const handleBooking = (event) =>{
        event.preventDefault();
        const slot = treatmentSlot;
        const booking = {
          treatmentId: _id,
          treatment: name,
          date: formattedDate,
          slot,
          patient: user.email,
          patientName: event.target.name.value,
          phone: event.target.phone.value
        }
        if(formStep === 2){
          completeFormStep();
          // JSON.stringify(booking, null, 2);
        console.log(booking);
        // fetch('https://hospitalwebapps-production.up.railway.app/booking', {
        //   method: "POST",
        //   headers:{
        //     "content-type": "application/json"
        //   },
        //   body: JSON.stringify(booking, null, 2)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //   if(data.success){
        //     toast(`Appointment is set, ${formattedDate} at ${slot}`)
        //   }
        //   else{
        //     toast.error(`Already have an appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
        //   }
        //   refetch()
        //   setTreatment(null);
        // })
      }
    }

    return (
        <div key={_id}>

    <h3 className="font-bold text-lg text-center">{name}</h3>
    {/* <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-xs" /> */}
    {/* <select name='slot' className="select w-full max-w-xs">
  <option disabled defaultValue="">Pick one slot</option>
  {
    slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
  }
</select> */}
    {/* <input {...register("name", { required: true })} type="text" name='name' placeholder="Name" className="input w-full max-w-xs" />
    {errors?.name?.type === 'required' && <p className="text-red-500 text-xs italic">Patent Name</p>} */}
    {/* <img src={user?.photoURL} alt="" /> */}
    {/* <input disabled type="email" name='email' value={user?.email} placeholder="Email" className="input w-full max-w-xs" />
    <input {...register("phone", { required: true })} type="number" name='phone' placeholder="Phone" className="input w-full max-w-xs" />
    {errors?.phone?.type === 'required' && <p className="text-red-500 text-xs italic">Phone Number</p>} */}

{/* <div className="grid grid-cols-4 gap-4">
{slots?.map((slot, index) => <><button type='button' key={index} onClick={() => handleSlot(slot)} value={slot}>{slot}</button>
  
  </>
  )}
</div> */}
{/* <form onSubmit={handleBooking} className='grid lg:grid-cols-1 gap-4 justify-items-center mt-2'>
<div className="modal-action">
      {<BookingSlot />}
      <button htmlFor="booking-modal" className="w-full max-w-xs btn">Submit</button>
    </div>
    </form> */}


    <div className='flex justify-center items-center'>
            {/* <h1>Booking Id: {id}</h1> */}
            <div className="card bg-base-100 shadow-xl lg:card-side lg:auto">
  <div className="card-body items-center">
    <form onSubmit={handleBooking}>
  {formStep >= 0 ? <div className={formStep === 0 ? 'block': 'hidden'}>
  <div>
  <button className="btn btn-wide">Wide</button>
  <button className="btn btn-wide">Wide</button>
            <div style={{visibility: "hidden"}}>
            </div>
            {/* {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} refetch={refetch} date={date}></BookingModal>} */}
        </div> 
  </div> : null}
  {formStep >= 1 ? <div className={formStep === 1 ? 'block': 'hidden'}>
  {slots?.map((slot, index) => <div><button type='button' key={index} onClick={() => handleSlot(slot, _id)} value={slot}>{slot}</button>
  
  </div>
  )}
  </div>: null}
  {formStep >= 2 ? <>
  <div className={formStep === 2 ? 'block': 'hidden'}>
  <input {...register("name", { required: true })} type="text" name='name' placeholder="Name" className="input w-full max-w-xs" />
    {errors?.name?.type === 'required' && <p className="text-red-500 text-xs italic">Patent Name</p>}
    {/* <img src={user?.photoURL} alt="" /> */}
    <input disabled type="email" name='email' value={user?.email} placeholder="Email" className="input w-full max-w-xs" />
    <input {...register("phone", { required: true })} type="number" name='phone' placeholder="Phone" className="input w-full max-w-xs" />
    {errors?.phone?.type === 'required' && <p className="text-red-500 text-xs italic">Phone Number</p>}     
  </div>
    </> : null}
    
    {formStep === 3 ? <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Thank You!</h2>
  </div>
</div> : null}
    <div className="card-actions justify-center">
      {/* <button onSubmit={handleSubmit(onSubmit)} className="btn dark"> Next </button> */}
      {/* {option ? <button onClick={()=>handleOptions(option)} className="btn btn-primary">Listen</button> : <button disabled className="btn btn-primary">Listen</button>} */}
      {renderBtn()}
      
    </div>
      </form>
  </div>
  <div className="card-body bg-base-100 shadow-xl">
    {formStep > 0 ? <button className={formStep === 3 ? 'hidden': 'block'} onClick={goToPreStep}> previous</button>: null}
    {/* {formStep === 3 ? null: <button onClick={goToPreStep}> previous</button>} */}
 {formStep < MAX_STEPS && <ul className="steps">
  <>
  <li className={formStep === 0 ? 'step step-primary' : 'step'}>Register</li>
  <li className={formStep === 1 ? 'step step-primary' : 'step'}>Choose plan</li>
  <li className={formStep === 2 ? 'step step-primary' : 'step'}>Purchase</li>
  </>
</ul>}
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now
      </button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default BookingModal;