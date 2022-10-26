import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);

    useEffect(() =>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user?.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data))
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
        <tbody>
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