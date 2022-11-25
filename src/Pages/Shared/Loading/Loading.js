import React from 'react';

const Loading = () => {
    return (
        <div className='loading-section'>
            <div className="shadow  max-w-sm mx-auto">
  <div className="animate-pulse flex space-x-4">
  <div className="login-section h-screen bg-slate-200">
<div className="flex w-full">
  <div className="grid flex-grow card rounded-box lg:mt-8">
  <ul className='social-login pr-2 bg-slate-200 rounded'>
            <li><button className='w-full max-w-xs bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:Blue-Blue-300' href="" type="submit"></button></li>
            <li><button className='w-full max-w-xs bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300' href=""  type="submit"></button></li>
            <li><button className='w-full max-w-xs bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300' href="" type="submit"></button></li>
        </ul>
  </div> 
  <div className="divider lg:divider-horizontal"></div> 

    <form className="grid flex-grow card rounded-box pl-5 input-field">
  <input type="email" className="w-full h-2 max-w-xs border-slate-300 " />
  <input type="current-password" className="w-full h-2 max-w-xs border-slate-300" />
  <a className="inline-block align-baseline py-2 font-bold text-sm text-blue-500" href="#">
      </a>
    <button type="submit" className="w-full max-w-xs bg-blue-500 text-white py-2">
      </button>
      </form>
</div>
        </div>
  </div>
</div>
        </div>
    );
};

export default Loading;