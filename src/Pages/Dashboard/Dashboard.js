import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Menu from '../Shared/Menu/Menu';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div className='dashboard-section'>
            <Menu />
            {/* <div className="drawer">
  <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <h2 className='text-center text-2xl'>Dashboard</h2>
    <div className="flex flex-col items-center justify-center">
    <Outlet />

    </div>

  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><Link to='/dashboard'>My Appointment</Link></li>
      <li><Link to='/dashboard/review'>Review</Link></li>
      
    </ul>
  </div>
</div> */}
<div className="drawer drawer-mobile">
  <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content lg:px-6 items-center justify-center">
    <label htmlFor="dashboard-menu" tabIndex={0} className="btn btn-ghost btn-circle drawer-button lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
    <Outlet />

  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-menu" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-52 bg-red-100 text-base-content">
        <li><Link to='/dashboard'>My Appointment</Link></li>
      <li><Link to='/dashboard/review'>Review</Link></li>
      {admin ? 
      <>
      <li><Link to='/dashboard/users'>All Users</Link></li>
      <li><Link to='/dashboard/addDoctors'>Add Doctors</Link></li>
      <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
      </>
       : null}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;