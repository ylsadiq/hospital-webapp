import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctors = () => {
    const {data: doctors, isLoading } = useQuery('doctors', () => fetch('https://hospitalwebapps-production.up.railway.app/doctor',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading){
        return <div className="btn loading">Loading</div>
    }
    return (
        <section className="doctor-container">
            <div className="container">
                <h3>Our Doctors</h3>
                <div className="doctor-list px-8 py-1">
                <div className="doctors-list-card grid lg:grid-cols-3 gap-2">
                    {doctors.map((doc, index) =>(
                <div className="card w-96 h-max glass">
                    <span className='block h-72'>
                        <img className='h-full w-full' src={doc?.img} alt="doctor"/>
                    </span>
                    <div className="card-body bg-sky-400">
                        <h5 className='text-slate-300'>{doc?.specialty}</h5>
                        <h2 className="card-title text-white">{doc?.firstname} {doc?.lastname}</h2>
                        <p className='text-white'>{doc?.discription}</p>
                        <div className="card-actions justify-end">
                            <button className='btn'><Link to='/appointment'>Book Appointment</Link> <span className='mr-2'><FontAwesomeIcon icon={faArrowRight}/></span></button>
                        </div>
                    </div>
                    </div>
                    ))}
                </div>
                </div>
               
            </div>
        </section>
    );
};

export default Doctors;