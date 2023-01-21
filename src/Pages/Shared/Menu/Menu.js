import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '.././Navbar.css';
import { useEffect } from 'react';
import auth from '../../../firebase.init';
const Menu = () => {
    const [ ] = useState("GB");
  const { t } = useTranslation(["common"]);
  const [user] = useAuthState(auth);
  const [stickyNav, setStickyNav] = useState(false);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

    return (
        <div className={`w-full top-0  z-[1000] ${stickyNav ? 'bg-indigo-200 fixed' : ''} }`}>
            <div className="navbar">
  <div className="navbar-start">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>{t("home")}</Link></li>
      <li tabIndex={0}>
        <a>
        {t("departments")}
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Cardiologist</a></li>
          <li><a>Neurology</a></li>
          <li><a>MRI Scans</a></li>
          <li><a>Urology</a></li>
        </ul>
      </li>
      <li><Link to='/doctors'>{t("Doctors")}</Link></li>
      <li><Link to='/appointment'>{t("Appointment")}</Link></li>
      <li><a>{t("contract")}</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  {user ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?.photoURL ? <img src={user?.photoURL} />:
          <img src="https://placeimg.com/80/80/people" />
          }
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        { user && 
        <li>
          <Link to='/dashboard' className="justify-between">
            My Dashboard
          </Link>
        </li>}
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div> : <button className='btn btn-ghost'><Link to='/login'>login</Link></button>}
  </div>
</div>
        </div>
    );
};

export default Menu;