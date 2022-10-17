import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './BookingModal.css'

const BookingModal = ({treatment, date, setTreatment}) => {
    const {_id, name, slots} = treatment;
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event?.target?.slot.value;
        setTreatment(null)
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
    slots?.map(slot => <option value={slot}>{slot}</option>)
  }
</select>
    <input type="text" name='name' value={user?.displayName} placeholder="Name" className="input w-full max-w-xs" />
    <img src={user?.photoURL} alt="" />
    <input type="email" name='email' value={user?.email} placeholder="Email" className="input w-full max-w-xs" />
    <input type="number" name='phone' placeholder="Phone" className="input w-full max-w-xs" />
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