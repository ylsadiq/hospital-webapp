import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import './AddDoctor.css'

const AddDoctor = () => {
    const { register, formState: { errors }, reset , handleSubmit } = useForm();
    const {data: services, isLoading } = useQuery('services', () => fetch('https://hospitalwebapps-production.up.railway.app/service') .then(res => res.json()))
    if(isLoading){
        return <button className="btn loading">loading</button>
    }
    const imgStorageKey='eb7f506c449c2e7a6323f2a986fd6e78';

    const onSubmit = async data => {
        console.log(data);
        const image = data.file[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    firstname: data.firstName,
                    lastname: data.lastName,
                    email: data.email,
                    specialty: data.specialty,
                    img: img,
                    discription: data.textarea
                }
                fetch('https://hospitalwebapps-production.up.railway.app/doctor', {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully')
                        reset()
                    }
                })
            }
        })
    };
    return (
        <div className='add-doctors-section'>
            <h2>Add Doctors</h2>
            <div className="doctors-container flex items-center justify-center flex-col">
            <form className="grid flex-grow card rounded-box w-2/4 pl-5 input-field" onSubmit={handleSubmit(onSubmit)}>
  <input {...register("firstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} type="firstName" placeholder="Your firstName" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.firstName?.type === 'required' && <p className="text-red-500 text-xs italic">Invalid firstName</p>}
  <input {...register("lastName", { required: true })} aria-invalid={errors.lastName ? "true" : "false"} type="lastName" placeholder="Your lastName" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.lastName?.type === 'required' && <p className="text-red-500 text-xs italic">Invalid lastName</p>}
    <label className='my-2' for='specialty'>Choose your spacility</label>
  <select id='specialty' className='select w-full max-w-xs' {...register("specialty")}>
    {services.map(service => <option
    key={service?._id}
    value={service?.name}
    >{service?.name}
    </option>
    )}
    </select>
    {errors?.specialty?.type === 'required' && <p className="text-red-500 text-xs italic">Invalid specialty</p>}
    <span>
    <label className='my-2' for='photo'>Choose your Photo</label>
    <input id='photo' {...register("file", { required: true })} aria-invalid={errors.file ? "true" : "false"} type="file" className="file-input file-input-bordered w-full max-w-xs" />
    {errors?.file?.type === 'required' && <p className="text-red-500 text-xs italic">Invalid file</p>}
    </span>

  <input {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="Your email" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.email?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose a email.</p>}
  <label htmlFor="text-field"></label>
  <textarea {...register("textarea", { required: true })} type="text" name="textarea" placeholder='textarea' className="textarea mt-2 mb-2 w-4/5"></textarea>
    <input className='btn btn-indigo-500 w-4/5' type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddDoctor;