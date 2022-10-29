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
import Menu from './Menu/Menu';

const Navbar = () => {
  const [selected, setSelected] = useState("GB");
  const { t, i18n } = useTranslation(["common"]);
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
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
          <Menu />
{/* Banner section added */}
<Banner/>
        </nav>
        </section>
    );
};

export default Navbar;