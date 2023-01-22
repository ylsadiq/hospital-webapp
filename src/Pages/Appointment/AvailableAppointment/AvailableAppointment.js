import { useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import './AvailableAppointment.css';
import { faArrowLeft, faArrowRight, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Services from '../Services/Services';
import { Card } from '@contentful/f36-components';

const AvailableAppointment = ({date, setDate}) => {
    const [treatment, setTreatment] = useState();
    const [user] = useAuthState(auth);
    const [option] = useState(false);
    const [formStep, setFormStep] = useState(0);
    const [ setIsActive] = useState(null);
    const [treatmentSlot, setTreatmentSlot] = useState('');
    const [show, setShow] = useState(false)
    const formattedDate = format(date, 'PP');
    
    const MAX_STEPS = 3;
    const goToPreStep = () =>{
      setFormStep(cur => cur - 1)
      if(formStep ===  1){
        setTreatmentSlot(null)
      }
    }
    const completeFormStep = () =>{
      setFormStep(cur => cur + 1)
    }
    const handleSlot = (slot) =>{
      setShow(!show)
      setTreatmentSlot(slot);
      setIsActive(slot);
    }

    const renderBtn = () => {
      if(formStep > 2){
        return undefined
      }else if(formStep === 2){
        return(
          <button
          type='submit treatment_btn'  
          disabled={!isValid }
          defaultValue={option} 
          className="btn px-5 treatment_btn">Finish</button>
        )
      }else{
        return(
          <button
          type='button'   
          onClick={completeFormStep}
          disabled={!treatment && !isValid}
           className={!treatment? 'disable_treatment not_allow btn px-5' : "btn px-5 treatment_btn"}>
            <span>Next
              <FontAwesomeIcon className='ml-2' icon={faArrowRight}/></span>
            </button>
        )
      }
    }
    const { register, formState: { errors, isValid } } = useForm({mode: 'all'});

    const { isLoading, refetch, error, data: services } = useQuery(['available', formattedDate], () =>
    fetch(`https://hospitalwebapps-production.up.railway.app/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )
   if (isLoading) return <div className='text-center block h-full mt-36'><button className="btn loading">loading</button></div>
 
   if (error) return 'An error has occurred: ' + error.message;

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = treatmentSlot;
    const booking = {
      treatmentId: treatment?._id,
      treatment: treatment?.name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: event?.target?.name?.value,
      phone: event?.target?.phone?.value
    }
    if(formStep === 2){
        completeFormStep();
        JSON.stringify(booking, null, 2);
      console.log(booking);
      fetch('https://hospitalwebapps-production.up.railway.app/booking', {
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.success){
          console.log('successful facing')
          toast(`Appointment is set, ${formattedDate} at ${treatmentSlot}`)
        }
        else{
          console.log('error facing')
          toast.error(`Already have an appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
        }
        refetch()
        setTreatment(null);
      })
    }
  }

    return (
        <div className='flex justify-center items-center  treatment_container'>
    <form onSubmit={handleSubmit}>
            <div className="card">
  <div>
  {formStep >= 0 ? <div className={formStep === 0 ? 'block': 'hidden'}>
    <h2 className='text-center'>Book an Appointment</h2>
  <div  className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
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
    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 w-full'>
  {treatment?.slots?.map((slot, index) => <div
  key={index}
  >
    <Card
    className='treatment_slot'
    type='button' 
    isSelected={true}
    isHovered={true}
    onClick={() => handleSlot(slot)} value={slot}>{slot}</Card>
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
    
    {formStep === 3 ? <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{
       duration: 0.8,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
     }}
     className="w-96 shadow-xl box">
  <div className="card-body thankyou_card">
  <h4>Healling Hospital</h4>
      <h6>Healling Hospital @ gmail.com</h6>
      <figure><FontAwesomeIcon className='mr-2' icon={faCalendarCheck}/></figure>
    <h2 className="card-title">Thank You</h2>
    <p>We look forword to speaking with you soon and getting you the right coverage</p>
  </div>
</motion.div>: null}
    
  </div>
  <div className={treatment ? 'third_card lg:mt-40 h-full card mt-5 p-2': 'card p-2 lg:mt-64'}>
  <div className="shadow-xl right_card p-5">
    
    {/* {formStep === 3 ? null: <button onClick={goToPreStep}> previous</button>} */}
 {formStep < MAX_STEPS && <ul className="steps">
  <>
  <li className={formStep === 0 ? 'step step-accent' : 'step'}>Appointment</li>
  <li className={formStep === 1 ? 'step step-accent' : 'step'}>Choose Time</li>
  <li className={formStep === 2 ? 'step step-accent' : 'step'}>fill input field</li>
  </>
</ul>}
{treatment ? <h3>{treatment?.name}</h3> : null}
{treatmentSlot ? <h4>{treatmentSlot}</h4> : null}
    <div className="card-actions justify-end">
    <div className="flex items-center justify-center mt-4">
    {formStep > 0 ? <button className={formStep === 3 ? 'hidden': 'btn mr-2 treatment_btn block px-5'} onClick={goToPreStep}>
      <span className='mr-2'>
      <FontAwesomeIcon icon={faArrowLeft}/></span>Back
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