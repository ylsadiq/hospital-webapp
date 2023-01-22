import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteDoctorsModal from './DeleteDoctorsModal';

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

    const {data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://hospitalwebapps-production.up.railway.app/doctor',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    
    if(isLoading){
        return <div className="btn loading">Loading</div>
    }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {doctors.map((doc, index) =>(
            <tr>
            <th>{index + 1}</th>
            <th>
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={doc?.img} alt={doc?.name} />
              </div>
              </div>
            </th>
            <td>{doc?.firstname} {doc?.lastname}</td>
            <td>{doc?.email}</td>
            <td>{doc?.specialty}</td>
            <td>
            <label 
            className='btn btn-error text-white'
            htmlFor="doctor-modal"
            onClick={() => setDeleteDoctor(doc?._id)}
            >
            <FontAwesomeIcon icon={faTrashCan}/>
            </label></td>
          </tr>
        ))}
    </tbody>
  </table>
    {deleteDoctor && <DeleteDoctorsModal deleteDoctor={deleteDoctor} refetch={refetch}/>}
</div>
    );
};

export default ManageDoctor;