import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { useSignInWithGoogle, useSignInWithFacebook, useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login/Login.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError ] = useSignInWithFacebook(auth);
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    if(data.password !== data.password2){
      return console.log("went someting wrong"); 
     }
    console.log(data);
    createUserWithEmailAndPassword(data?.email, data?.password)
    reset()
  }

  let signInError;
  if(loading || gLoading){
     return <Loading />
  }
  if(error||fError){
    signInError = <p class="text-red-500 text-xs italic">{Error?.message || fError?.message}</p>
  }
    return (
        <div className="login-container lg:mt-28">
            <div className="login-section">
<div className="flex flex-col w-3/5 lg:flex-row bg-slate-100 lg:p-7 md:p-5 border rounded-md">
  <div className="grid flex-grow card rounded-box lg:mt-16 w-2/4">
  <ul className='social-login pr-2'>
            <li><button onClick={() => signInWithFacebook()} className='w-full max-w-xs bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:Blue-Blue-300' href="" type="submit"><FontAwesomeIcon icon={faFacebookF} /></button></li>
            <li><button onClick={() => signInWithGoogle()} className='w-full max-w-xs bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300' href=""  type="submit"><FontAwesomeIcon icon={faGooglePlus} /></button></li>
            <li><button className='w-full max-w-xs bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300' href="" type="submit"><FontAwesomeIcon icon={faLinkedin} /></button></li>
        </ul>
  </div> 
  <div className="divider lg:divider-horizontal"></div> 

    <form className="grid flex-grow card rounded-box w-2/4 pl-5 input-field" onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="text" placeholder="Your name" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.name?.type === 'required' && <p class="text-red-500 text-xs italic">Invalid User</p>}
  <input  {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="Your email address" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.email?.type === 'required' && <p class="text-red-500 text-xs italic">Invalid Email</p>}
  <input type="password" {...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"} placeholder="password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.password?.type === 'required' && <p class="text-red-500 text-xs italic">Please choose a password.</p>}
  <input type="password" {...register("password2", { required: true })} aria-invalid={errors.password ? "true" : "false"} placeholder="Re password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.password?.type === 'required' && <p class="text-red-500 text-xs italic">Please choose Re-password.</p>}
  <a class="inline-block align-baseline py-2 font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
      {signInError}
    <button type="submit" class="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In
      </button>
      </form>
</div>
        </div>
        <p>Already Have an Account?<Link href="" to='/login' className='text-red-500'>Login now!</Link></p>
        </div>
    );
};

export default Register;