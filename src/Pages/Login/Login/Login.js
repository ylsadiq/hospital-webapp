import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithEmailAndPassword, useUpdatePassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import './Login.css'
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useToken from '../../../hooks/usetoken';
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
  const [token] = useToken(eUser || gUser || fUser);
  const [updatePassword, updating, updateError] = useUpdatePassword(auth);
    useEffect(() =>{
      if(token){
        navigate(from, {replace: true});
      }
    }, [token, from, navigate])
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data?.email, data?.password);
  };

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
  <input {...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"} type="password" placeholder="Your password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  {errors?.email?.type === 'required' && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
  <a to={'/forgetpassword'} className="inline-block align-baseline py-2 font-bold text-sm text-blue-500 hover:text-blue-800">
        Forget Password
      </a>

      {signInError}
    <button type="submit" className="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
        Sign In
      </button>
      </form>
</div>
</div>
<p>Do not have an account yet?<a href="" to='/register' className='text-red-500'>Register now!</a></p>
        </div>
    );
};

export default Login;