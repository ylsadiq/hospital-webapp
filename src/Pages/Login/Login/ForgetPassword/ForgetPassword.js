import React from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';

const ForgetPassword = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updatePassword, updating, updateError] = useUpdatePassword(auth);
    let updatePasswordError;
    const onSubmit = async (data) =>{
        if(data.password !== data.password2){
            updatePasswordError =  <p className="text-red-500 text-xs italic">Password not massing</p>; 
           }
        await updatePassword( {email: data?.email, password: data?.password} );
          alert('Updated password');
          reset()
        }
    return (
        <div className='flex justify-center items-center'>
    <form className="grid flex-grow card rounded-box w-2/4 pl-5 input-field" onSubmit={handleSubmit(onSubmit)}>
    <p className='text-left flex font-bold'>Reset new Password</p>
    <input {...register("updateemail", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="Your email address" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.email?.type === 'required' && <p className="text-red-500 text-xs italic">Invalid Email</p>}
    <input type="password" {...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"} placeholder="password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.password?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
  <input type="password" {...register("password2", { required: true })} aria-invalid={errors.password ? "true" : "false"} placeholder="Re password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.password?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose Re-password.</p>}
  {updatePasswordError}
  <button type="submit" className="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Update Password
      </button>
  </form>
  </div>
    );
};

export default ForgetPassword;