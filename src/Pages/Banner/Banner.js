import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import CountUp from 'react-countup';
import { useTranslation} from 'react-i18next';
import './Banner.css'

const Banner = () => {
  const { t, i18n } = useTranslation(["banner"]);

    return (
            <section className="hero-section mt-10">
                <div className="container">
                <div className="hero-container md:flex justify-items-center justify-between">
  <div className='md:w-3/5 md:text-left sm:text-center'>
      <h1 className="lg:text-5xl sm:text-4xl font-bold"><span className='block'>Your <span className='text-sky-400'>Health</span> is Our</span>  Top <span className='text-blue-500'>Priority</span></h1>
      <p className="py-6 text-lg">{t("bannerParagraph")}</p>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent">{t("bannerBtn")}</button>
      <div className="countup text-primary my-4 grid grid-cols-4 gap-4 ">
                        <div className="count1">
                        <h4 className='secondary'><CountUp end={262} />k+
                        </h4>
                        <h6 className='paragraph'>{t("patients")}</h6>
                        </div>

                        <div className="count2 ">
                        <h4 className='secondary'><CountUp end={96} />%
                        </h4>
                        <h6 className='paragraph'>{t("satisfaction")}</h6>
                        </div>

                        <div className="count3 4">
                        <h4 className='secondary'><CountUp end={86} />+
                        </h4>
                        <h6 className='paragraph'>{t("doctors")}</h6>
                        </div>
                        </div>
    </div>
        <div className='md:w-2/5 banner-left'>
            <div className="outer_circle">
            <div className="inner_circle">
            <div className="inner-img">
            <img src="https://i.ibb.co/fFzmyXP/pose-2.png" alt="pose-2" />
            </div>
            </div>
            <button className='btn btn-ghost btn-outline'> <FontAwesomeIcon icon={faCircleCheck} /> Regular checkup</button>
            </div>
        <div className="doctors-card">
        <h5>Meet Our Doctors</h5>
        <div className="doc-info">
        <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </div> 
        <span><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>
        </div>
            <div className="doc-card-line">
            <div className="doc-card-line_one"></div>
            <div className="doc-card-line_two"></div>
            </div>
        </div>
        </div>
  </div>
        </div>
</section>
    );
};

export default Banner;