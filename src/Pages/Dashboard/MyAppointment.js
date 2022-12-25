import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import Modal from './Modal/Modal';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const [deletId, setDeleteId] = useState(null);
    const navigate = useNavigate()

      useEffect(() =>{
        if(user){
            fetch(`https://healing-hospitalserver.up.railway.app/booking?patient=${user?.email}`,{
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res => {
          if(res.status === 401 || res.status === 403){
              signOut(auth);
              localStorage.removeItem('accessToken')
              navigate('/')
          }
          return res.json()
        })
        .then(data => {
          setAppointments(data)}
          )
          .catch(error => (error))
        }
    }, [user])
    
    return (
        <div>
            <h2>My Appointment: {appointments?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
        <th>Action</th>
      </tr>
    </thead>
    {appointments.map((ap, index) =>
          <>
        <tbody key={index}>
      <tr>
        <th>{index + 1}</th>
        <td>{ap?.patientName}</td>
        <td>{ap?.date}</td>
        <td>{ap?.slot}</td>
        <td>{ap?.treatment}</td>
        <td><span className="badge-sm">
        <label onClick={() => setDeleteId(ap?._id)}
        htmlFor="Delete-modal"
        className="btn btn-error btn-xs"><FontAwesomeIcon icon={faTrashCan}/></label>
        </span></td>
      </tr>
    </tbody>
    {deletId && <Modal deletId={deletId}/>}
      </>
    )}

  </table>
</div>
        </div>
    );
};

export default MyAppointment;