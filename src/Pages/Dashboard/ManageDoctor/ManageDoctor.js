import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctor = () => {
    // const {data: doctors, isLoading } = useQuery('doctors', () => fetch('https://healing-hospitalserver.up.railway.app/doctor',{
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));
    // console.log(doctors);
    // if(isLoading){
    //     return <div className="btn loading">Loading</div>
    // }
    const {data: doctors, isLoading} = useQuery('doctors', () => fetch('http://localhost:5000/doctor',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(doctors);
    if(isLoading){
        return <div className="btn loading">Loading</div>
    }
    return (
        <div className="overflow-x-auto">
            {doctors.length}
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
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
            <td>{doc?.firstname} {doc?.lastname}</td>
            <td>{doc?.email}</td>
            <td>{doc?.specialty}</td>
            <td><button className='btn btn-error text-white'><FontAwesomeIcon icon={faTrashCan}/></button></td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
    );
};

export default ManageDoctor;