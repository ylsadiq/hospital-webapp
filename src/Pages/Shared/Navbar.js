import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className='container mx-auto'>
          <div className="top-bar flex justify-end items-center">
          <span><FontAwesomeIcon icon={faPhone} /> +0089892</span>
          </div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="brand-logo">
    <a className="normal-case text-xl"><img src="https://doccure-wpv2.dreamguystech.com/wp-content/themes/doccure/assets/images/logo.png" alt="" /></a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <a>
        Departments
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Cardiologist</a></li>
          <li><a>Neurology</a></li>
          <li><a>MRI Scans</a></li>
          <li><a>Urology</a></li>
        </ul>
      </li>
      <li><a>Doctors</a></li>
      <li><a>About</a></li>
      <li><a>Blog</a></li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </nav>
    );
};

export default Navbar;