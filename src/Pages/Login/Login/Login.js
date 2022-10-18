import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithEmailAndPassword, useUpdatePassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError ] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [
    signInWithEmailAndPassword,
    eUser,
    eLoading,
    eError,
  ] = useSignInWithEmailAndPassword(auth);
  const [updatePassword, updating, updateError] = useUpdatePassword(auth);
    useEffect(() =>{
      if(eUser || fUser || gUser){
        navigate(from, {replace: true});
      }
    }, [eUser, gUser, from, fUser, navigate])
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data?.email, data?.password);
  };
const updateOnHandle = async (data) =>{
  await updatePassword({email: data?.email});
    alert('Updated password');
}

  let signInError;
  if( fLoading || eLoading || updating){
     return <Loading />
  }
  if(eError||fError || updateError){
    signInError = <p className="text-red-500 text-xs italic">{eError?.message || fError?.message || updateError?.message}</p>
  }
    return (
        <div className="login-container lg:mt-28">
          <div className="login-section">
<div className="flex flex-col w-3/5 lg:flex-row bg-slate-100 lg:p-7 md:p-5 border rounded-md">
  <div className="grid flex-grow card rounded-box w-2/4 lg:mt-8">
  <ul className='social-login pr-2'>
            <li><button onClick={() => signInWithFacebook()} className='w-full max-w-xs bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:Blue-Blue-300' href="" type="submit"><FontAwesomeIcon icon={faFacebookF} /></button></li>
            <li><button onClick={() => signInWithGoogle()} className='w-full max-w-xs bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300' href=""  type="submit"><FontAwesomeIcon icon={faGooglePlus} /></button></li>
            <li><button className='w-full max-w-xs bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300' href="" type="submit"><FontAwesomeIcon icon={faLinkedin} /></button></li>
        </ul>
  </div> 
  <div className="divider lg:divider-horizontal"></div> 

    <form className="grid flex-grow card rounded-box w-2/4 pl-5 input-field" onSubmit={handleSubmit(onSubmit)}>
  <input {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="Your email address" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.email?.type === 'required' && <p className="text-red-500 text-xs italic">Invalid Email</p>}
  <input type="password"{...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"} type="password" placeholder="Your password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.email?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
  {/* <a className="inline-block align-baseline py-2 font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        
      </a> */}
      {/* forget password */}

      {signInError}
    <button type="submit" className="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In
      </button>
      </form>
      <label htmlFor="my-modal-3" className="inline-block align-baseline py-2 font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Password?</label>

<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form className="grid flex-grow card rounded-box w-2/4 pl-5 input-field" onSubmit={handleSubmit(updateOnHandle)}>
    <p className='text-left flex font-bold'>Reset new Password</p>
    <input {...register("updateemail", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="Your email address" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.email?.type === 'required' && <p className="text-red-500 text-xs italic">Invalid Email</p>}
    <input type="password" {...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"} placeholder="password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.password?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
  <input type="password" {...register("password2", { required: true })} aria-invalid={errors.password ? "true" : "false"} placeholder="Re password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.password?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose Re-password.</p>}
  <button type="submit" className="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
  </form>
  </div>
</div>
</div>
</div>
<p>Do not have an account yet?<Link href="" to='/register' className='text-red-500'>Register now!</Link></p>
        </div>
    );
};

export default Login;