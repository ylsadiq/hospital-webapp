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
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        <h2>manage Doc</h2>
    {/* {doctors.map} */}
    </tbody>
  </table>
</div>
    );
};

export default ManageDoctor;