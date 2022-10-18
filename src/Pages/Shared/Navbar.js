import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation} from 'react-i18next';
import i18next from 'i18next';
import ReactFlagsSelect from 'react-flags-select';
import './Navbar.css';
import Banner from '../Banner/Banner';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selected, setSelected] = useState("GB");
  const { t, i18n } = useTranslation(["common"]);
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

  const handleLanguageChange = (e) => {
		setSelected(i18n.changeLanguage(e))
    setSelected(e)
	};
    return (
        <section className='header-container'>
          <nav className='px-4'>

          <div className="top-bar flex justify-end items-center">
          <FontAwesomeIcon icon={faPhone} /><span>{t("emergency")}: +0089892</span>
          <div className="lang-select">
          <label>Select Language</label>
          <ReactFlagsSelect
          defaultCountry="GB"
          countries={["GB", "ES", "FR", "BD"]}
          customLabels={{ GB: "English", ES: "Spain", FR: "French", BD: "Bangladesh"}}
          selected={selected}
          onSelect={handleLanguageChange}
          className="menu-flags"
        />
          </div>
          
        {/* <div className="lang-select">
        <label>Select Language</label>
        <select 
        className="w-full max-w-xs"
        value={localStorage.getItem("i18nextLng")}
				onChange={handleLanguageChange}
        >
        <option selected>English</option>
        <option value="bn">Bangla</option>
				<option value="fr">Français</option>
				<option value="es">Español</option>
      </select>
        </div> */}
          </div>
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
    <div className="brand-logo">
    <a className="normal-case text-xl"><img src="https://doccure-wpv2.dreamguystech.com/wp-content/themes/doccure/assets/images/logo.png" alt="" /></a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a>{t("home")}</a></li>
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
      <li><a>{t("doctor")}</a></li>
      <li><Link to='/appointment'>{t("Appointment")}</Link></li>
      <li><a>{t("blog")}</a></li>
      <li><a>{t("contract")}</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  {user ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?.photoURL ? <img src={user?.photoURL} />:
          <img src="https://placeimg.com/80/80/people" />}
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
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div> : <button className='btn btn-ghost'><Link to='/login'>login</Link></button>}
  </div>
</div>
{/* Banner section added */}
<Banner/>
        </nav>
        </section>
    );
};

export default Navbar;