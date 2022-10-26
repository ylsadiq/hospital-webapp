import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';
import './BookingModal.css'

const BookingModal = ({treatment, date, setTreatment, refetch}) => {
    const {_id, name, slots} = treatment;
    const formattedDate = format(date, 'PP');
    const { register, formState: { errors }} = useForm();
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = (event) =>{
        event.preventDefault();
        const slot = event?.target?.slot.value;
        const booking = {
          treatmentId: _id,
          treatment: name,
          date: formattedDate,
          slot,
          patient: user.email,
          patientName: event.target.name.value,
          phone: event.target.phone.value
        }
        console.log(booking);
        fetch('http://localhost:5000/booking', {
          method: "POST",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.success){
            toast(`Appointment is set, ${formattedDate} at ${slot}`)
          }
          else{
            toast.error(`Already have an appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
          }
          refetch()
          setTreatment(null);
        })
    }

    return (
        <div key={_id}>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box relative">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-center">{name}</h3>
    <form onSubmit={handleBooking} className='grid lg:grid-cols-1 gap-4 justify-items-center mt-2'>
    <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-xs" />
    <select name='slot' className="select w-full max-w-xs">
  <option disabled defaultValue="">Pick one slot</option>
  {
    slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
  }
</select>
    <input {...register("name", { required: true })} type="text" name='name' placeholder="Name" className="input w-full max-w-xs" />
    {errors?.name?.type === 'required' && <p className="text-red-500 text-xs italic">Patent Name</p>}
    {/* <img src={user?.photoURL} alt="" /> */}
    <input disabled type="email" name='email' value={user?.email} placeholder="Email" className="input w-full max-w-xs" />
    <input {...register("phone", { required: true })} type="number" name='phone' placeholder="Phone" className="input w-full max-w-xs" />
    {errors?.phone?.type === 'required' && <p className="text-red-500 text-xs italic">Phone Number</p>}
    <div className="modal-action">
      <button htmlFor="booking-modal" className="w-full max-w-xs btn">Submit</button>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;