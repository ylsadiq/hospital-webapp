import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal/Modal';
import { useQuery } from 'react-query';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [deletId, setDeleteId] = useState(null);
    const {data: appointments, isLoading, refetch} = useQuery('appointments', () => fetch(`https://hospitalwebapps-production.up.railway.app/booking?patient=${user?.email}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  })
  .then(res => res.json()))
  if(isLoading){
      return <button className="btn loading">loading</button>
  }

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
    {deletId && <Modal deletId={deletId} refetch={refetch} key={index}/>}
      </>
    )}

  </table>
</div>
        </div>
    );
};

export default MyAppointment;