// import React from 'react';
// import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import Service from '../Service/Service';
// import BookingModal from './BookingModal/BookingModal';
// import { useQuery } from 'react-query'
// import './AvailableAppointment.css';

// const AvailableAppointment = ({date}) => {
//     // const [services, setServices] = useState([]);
//     const [treatment, setTreatment] = useState({});
//     const formattedDate = format(date, 'PP');
//     const { isLoading, refetch, error, data: services } = useQuery(['available', formattedDate], () =>
//     fetch(`https://floating-escarpment-89752.herokuapp.com/available?date=${formattedDate}`).then(res =>
//        res.json()
//      )
//    )
//    if (isLoading) return <button className='btn loading'>Loding</button>
 
//    if (error) return 'An error has occurred: ' + error.message
    // useEffect(() =>{
    //     fetch(`https://floating-escarpment-89752.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])
//     return (
//         <div>
//             <div  className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
//                 {
//                     services.map(service =><Service key={service._id}
//                         setTreatment={setTreatment}
//                         service={service}/>)
//                 }
//             </div>
            
//             {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} refetch={refetch} date={date}></BookingModal>}
//         </div>
//     );
// };

// export default AvailableAppointment;

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Service from '../Service/Service';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AvailableAppointment.css';
import { faArrowLeft, faArrowRight, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Services from '../Services/Services';

const AvailableAppointment = ({date, setDate}) => {
    const [treatment, setTreatment] = useState();
    const [services, setServices] = useState([]);
    const [slotTime, setSlotTime] = useState('');
    const [user] = useAuthState(auth);
    const [option, setOption] = useState(false);
    const [formStep, setFormStep] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [treatmentSlot, setTreatmentSlot] = useState('');
    const formattedDate = format(date, 'PP');
    
    const MAX_STEPS = 3;
    const goToPreStep = () =>{
      setFormStep(cur => cur - 1)
    }
    const completeFormStep = () =>{
      setFormStep(cur => cur + 1)
    }
    const handleSlot = (slot) =>{
        setTreatmentSlot(slot);
        setIsActive(!isActive);
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
           className="btn btn-primary text-white px-5">
            <span>Next
              <FontAwesomeIcon className='ml-2' icon={faArrowRight}/></span>
            </button>
        )
      }
    }
    const { register, formState: { errors, isValid } } = useForm({mode: 'all'});

  //   const { isLoading, refetch, error, } = useQuery(['available', formattedDate], () =>
  //   fetch(`https://floating-escarpment-89752.herokuapp.com/available?date=${formattedDate}`).then(res =>
  //      res.json()
  //    )
  //  )
  //  if (isLoading) return <button className="btn loading">loading</button>
 
  //  if (error) return 'An error has occurred: ' + error.message;

  //  useEffect(() =>{
  //       fetch('http://localhost:5000//available')
  //       .then(res => res.json())
  //       .then(data => setServices(data))
  //   }, [])
    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const slotTime = treatmentSlot;
    const booking = {
      treatmentId: treatment?._id,
      treatment: treatment?.name,
      date: formattedDate,
      slotTime,
      patient: user.email,
      patientName: event?.target?.name?.value,
      phone: event?.target?.phone?.value
    }
    if(formStep === 2){
        completeFormStep();
        // JSON.stringify(booking, null, 2);
      console.log(booking);
    //   fetch('https://floating-escarpment-89752.herokuapp.com/booking', {
    //     method: "POST",
    //     headers:{
    //       "content-type": "application/json"
    //     },
    //     body: JSON.stringify(booking, null, 2)
    //   })
    //   .then(res => res.json())
    //   .then(data =>{
    //     if(data.success){
    //       toast(`Appointment is set, ${formattedDate} at ${treatmentSlot}`)
    //     }
    //     else{
    //       toast.error(`Already have an appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
    //     }
    //     refetch()
    //     setTreatment(null);
    //   })
    }
  }

    return (
        <div className='flex justify-center items-center treatment_container'>
            {/* <h1>Booking Id: {id}</h1> */}
    <form onSubmit={handleSubmit}>
            <div className="card lg:card-side lg:auto">
  <div>
  {formStep >= 0 ? <div className={formStep === 0 ? 'block': 'hidden'}>
    <h2 className='text-center'>Book an Appointment</h2>
  <div  className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
                {/* {
                    services.map(service =><Service key={service._id}
                         setTreatment={setTreatment}
                         treatment={treatment}
                         service={service}/>)
                } */}
                {
                    services.map(service =><Services key={service._id}
                         setTreatment={setTreatment}
                         treatment={treatment}
                         service={service}/>)
                }
    </div>
  </div> : null}
  {formStep >= 1 ? <div className={formStep === 1 ? 'block': 'hidden'}>
    <h2 className='text-center'>Choose Time</h2>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
  {treatment?.slots?.map((slot, index) => <div
  key={index}
  >
    <button className="treatment_slot" 
    type='button'
    onClick={() => handleSlot(slot)} value={slot}>{slot}</button>
  </div>
  )}
  </div>
  </div>: null}
  {formStep >= 2 ? <>
  <div className={formStep === 2 ? 'block': 'hidden'}>

  <div className='block mx-auto text-center'>
    <h2 className='text-center'>Contract Info:</h2>
    <div>
    <input type="text" disabled value={format(date, 'PP')} className="input w-full  input-bordered my-1.5" />

  <input {...register("name", { required: true })} type="text" name='name' placeholder="Name" className="input w-full  input-bordered my-1.5" />
  {errors?.name?.type === 'required' && <p className="text-red-500 text-xs italic">Patent Name</p>}

  <input disabled type="email" name='email' value={user?.email} placeholder="Email" className="input w-full " />
  <input {...register("phone", { required: true })} type="text" name='phone' placeholder="Phone" className="input w-full  input-bordered my-1.5" />
  {errors?.phone?.type === 'required' && <p className="text-red-500 text-xs italic">Phone Number</p>}
</div>
    </div>
      
  </div>
    </> : null}
    
    {formStep === 3 ? <div className="w-96 bg-base-100 shadow-xl">
  <div className="card-body thankyou_card">
  <h4>Healling Hospital</h4>
      <h4>Healling Hospital @ gmail.com</h4>
      <figure><FontAwesomeIcon className='mr-2' icon={faCalendarCheck}/></figure>
    <h2 className="card-title">Thank You</h2>
    <p>We look forword to speaking with you soon and getting you the right coverage</p>
  </div>
</div>: null}
    
  </div>
  <div className="card ">
  <div className="card-body bg-base-100 shadow-xl right_card">
    
    {/* {formStep === 3 ? null: <button onClick={goToPreStep}> previous</button>} */}
 {formStep < MAX_STEPS && <ul className="steps">
  <>
  <li className={formStep === 0 ? 'step step-primary' : 'step'}>Appointment</li>
  <li className={formStep === 1 ? 'step step-primary' : 'step'}>Choose Time</li>
  <li className={formStep === 2 ? 'step step-primary' : 'step'}>fill input field</li>
  </>
</ul>}
{treatment ? <h3>{treatment?.name}</h3> : null}
{treatmentSlot ? <h4>{treatmentSlot}</h4> : null}
    <div className="card-actions justify-end">
    <div className="flex items-center justify-center mt-4">
    {formStep > 0 ? <button className={formStep === 3 ? 'hidden': 'btn btn-primary mr-2 text-white block px-5'} onClick={goToPreStep}> <span>
      <FontAwesomeIcon className='mr-2' icon={faArrowLeft}/></span>Back
      </button>: null}
      {renderBtn()}
    </div>
    </div>
  </div>
  </div>
</div>
      </form>
        </div>
    );
};

export default AvailableAppointment;