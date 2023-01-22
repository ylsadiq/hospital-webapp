import { useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import AppointmentServices from './AppointmentServices/AppointmentServices';
import auth from '../../firebase.init';
import AppointmentCalander from './AppointmentServices/AppointmentCalander/AppointmentCalander';

const AllTreatment = () => {
    const [date, setDate] = useState(new Date());
    const [treatment, setTreatment] = useState();
    const [slotTime, setSlotTime] = useState('');
    const [user] = useAuthState(auth);
    const [option, setOption] = useState(false);
    const [formStep, setFormStep] = useState(0);
    const formattedDate = format(date, 'PP');
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
    const { register, formState: { errors, isValid } } = useForm({mode: 'all'});

    const { isLoading, refetch, error, data: services } = useQuery(['available', formattedDate], () =>
    fetch(`https://hospitalwebapps-production.up.railway.app/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )
   if (isLoading) return <button className="btn loading">loading</button>
 
   if (error) return 'An error has occurred: ' + error.message
  const handleSubmit = (event) => {
    event.preventDefault();
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
      completeFormStep()
      JSON.stringify(booking, null, 2);
      console.log(booking);
    //   fetch('https://hospitalwebapps-production.up.railway.app/booking', {
    //     method: "POST",
    //     headers:{
    //       "content-type": "application/json"
    //     },
    //     body: JSON.stringify(booking)
    //   })
    //   .then(res => res.json())
    //   .then(data =>{
    //     if(data.success){
    //       toast(`Appointment is set, ${formattedDate} at ${slotTime}`)
    //     }
    //     else{
    //       toast.error(`Already have an appointment on, ${data?.booking?.date} at ${data?.booking?.slotTime}`)
    //     }
    //     refetch()
    //     setTreatment(null);
    //     console.log(booking);
    // })
    }
  }

    // useEffect(() =>{
    //     fetch(`https://hospitalwebapps-production.up.railway.app/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])

    return (
        <div className='flex justify-center items-center'>
            {/* <h1>Booking Id: {id}</h1> */}
            <div className="card shadow-xl lg:card-side lg:w-10/12 lg:auto">
  <div className="card-body w-9/12 items-center">
    <form onSubmit={handleSubmit}>
  {formStep >= 0 ? <div className={formStep === 0 ? 'block': 'hidden'}>
  <div>
            <AppointmentServices date={date} setDate={setDate} treatment={treatment} setTreatment={setTreatment} setSlotTime={setSlotTime} slotTime={slotTime} setOption={setOption}/>
            <div style={{visibility: "hidden"}}>
            </div>
            {/* {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} refetch={refetch} date={date}></BookingModal>} */}
        </div> 
  </div> : null}
  {formStep >= 1 ? <div className={formStep === 1 ? 'block': 'hidden'}>
      <AppointmentCalander date={date} setDate={setDate} setTreatment={setTreatment} treatment={treatment} refetch={refetch} slotTime={slotTime} setSlotTime={setSlotTime}/>
  </div>: null}
  {formStep >= 2 ? <>
  <div className={formStep === 2 ? 'block': 'hidden'}>

  <div className='grid lg:grid-cols-1 gap-4 justify-items-center mt-2'>
    <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-xs" />

    <input {...register("name", { required: true })} type="text" name='name' placeholder="Name" className="input w-full max-w-xs" />
    {errors?.name?.type === 'required' && <p className="text-red-500 text-xs italic">Patent Name</p>}

    <input disabled type="email" name='email' value={user?.email} placeholder="Email" className="input w-full max-w-xs" />
    <input {...register("phone", { required: true })} type="number" name='phone' placeholder="Phone" className="input w-full max-w-xs" />
    {errors?.phone?.type === 'required' && <p className="text-red-500 text-xs italic">Phone Number</p>}
    <div className="modal-action">
    </div>
    </div>
      
  </div>
    </> : null}
    
    {formStep === 3 ? <h2>Thank You !</h2>: null}
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
    );
};

export default AllTreatment;