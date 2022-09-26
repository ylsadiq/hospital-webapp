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
            <div class="outer_circle">
            <div class="inner_circle">
            <div className="inner-img">
            <img src="https://i.ibb.co/fFzmyXP/pose-2.png" alt="pose-2" />
            </div>
            </div>
            <button className='btn btn-ghost btn-outline'> <FontAwesomeIcon icon={faCircleCheck} /> Regular checkup</button>
            </div>
        <div className="doctors-card">
        <h5>Meet Our Doctors</h5>
        <div className="doc-info">
        <img src="https://placeimg.com/80/80/people" />
        <img src="https://placeimg.com/80/80/people" />
        <img src="https://placeimg.com/80/80/people" />
        <img src="https://placeimg.com/80/80/people" />
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