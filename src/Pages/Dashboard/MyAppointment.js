import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal/DeleteModal';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate()
    const [control , setControl] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
      const fetchData = async () => {
        if(user){
          await fetch(`https://healing-hospitalserver.up.railway.app/booking?patient=${user?.email}`,{
          method: 'GET',
          headers:{
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
          .catch((e) => console.error(e));
        }
      };
      const timer = setTimeout(() => {
        if(appointments >= 0){
            fetchData()
        }else{
          return <p>No BOoking add</p>
        }
      }, 5000);
  
      return () => clearTimeout(timer);
    }, [user]);

    // useEffect(() =>{
    //     if(user){
    //         fetch(`https://healing-hospitalserver.up.railway.app/booking?patient=${user?.email}`,{
    //           method: 'GET',
    //           headers:{
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //           }
    //         })
    //     .then(res => {
    //       if(res.status === 401 || res.status === 403){
    //           signOut(auth);
    //           localStorage.removeItem('accessToken')
    //           navigate('/')
    //       }
    //       return res.json()
    //     })
    //     .then(data => {
    //       setAppointments(data)}
    //       )
    //     }
    // }, [user]);

    const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure, you want to delete?');
      window.location.reload(false);
      if(proceed){
        const url = `http://localhost:5000/booking/${id}`;
          fetch(url, {
           method: "DELETE",
           headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
          })
          .then((res) => res.json())
           .then((data) => {
           if (data.deletedCount) {
           setControl(!control);
           }
     })
     
      }
     
 };
    
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
        <tbody key={index}>
      <tr>
        <th>{index + 1}</th>     
        <td>{ap?.patientName}</td>
        <td>{ap?.date}</td>
        <td>{ap?.slot}</td>
        <td>{ap?.treatment}</td>
        <td><Link className="btn btn-sm" to={`/dashboard/payment/${ap?._id}`}>Pay</Link>
     {/* <span className="badge-sm"><button className="btn btn-error btn-xs" onClick={() => handleDelete(ap?._id)}><FontAwesomeIcon icon={faTrashCan}/></button></span></td> */}
     <span className="badge-sm"><button className="btn btn-error btn-xs" onClick={() => {setModalOpen(true)}}><FontAwesomeIcon icon={faTrashCan}/></button></span></td>
      </tr>
    </tbody>
    )}
    {modalOpen && <DeleteModal setOpenModal={setModalOpen} modalOpen={modalOpen}/>}
    {/* {modalOpen && <DeleteModal setOpenModal={setModalOpen} />} */}
  </table>
</div>
        </div>
    );
};

export default MyAppointment;