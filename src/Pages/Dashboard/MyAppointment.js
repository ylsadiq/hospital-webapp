import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate()

    useEffect(() =>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user?.email}`,{
              method: 'GET',
              headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res => {
          console.log(res, "res")
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
      </tr>
    </thead>
    {appointments.map((ap, index) =>
        <tbody key={index}>
      <tr>
        <th>{index + 1}</th>
        <td>{ap?.patientName}</td>
        <td>{ap?.date}</td>
        <td>{ap?.slot}</td>
        <td>{ap?.treatment}</td>
      </tr>
    </tbody>
    )}
  </table>
</div>
        </div>
    );
};

export default MyAppointment;