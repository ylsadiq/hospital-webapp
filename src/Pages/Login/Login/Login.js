import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import './Login.css'
const Login = () => {
    return (
        <div className="login-section h-screen">
<div className="flex flex-col w-2/3 lg:flex-row">
  <div className="grid flex-grow card rounded-box lg:mt-12">
  <ul className='social-login pr-2'>
            <li><a className='w-full max-w-xs bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:Blue-Blue-300' href="" type="submit"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a className='w-full max-w-xs bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300' href=""  type="submit"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
            <li><a className='w-full max-w-xs bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300' href="" type="submit"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
  </div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow card rounded-box pl-5 input-field">
  <input type="text" placeholder="Your email address" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  <p class="text-red-500 text-xs italic">Please choose a password.</p>
  <input type="text" placeholder="Your password" className="my-2 input w-full max-w-xs border border-slate-300 hover:border-indigo-300" />
  <p class="text-red-500 text-xs italic">Please choose a password.</p>
  <a class="inline-block align-baseline py-2 font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    <button class="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
  </div>
</div>
        </div>
    );
};

export default Login;