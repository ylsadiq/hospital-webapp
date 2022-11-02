import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import MakeAdmin from './MakeAdmin';

const AllUsers = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://floating-escarpment-89752.herokuapp.com/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()))
    if(isLoading){
        return <button className="btn loading">loading</button>
    }
    
    return (
        <div>
            <h3>All users: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Email</th> 
        <th>Job</th> 
        <th>location</th> 
      </tr>
    </thead> 
   {users.map((user, index) =>
   <tbody key={index}>
   <tr>
     <th>{index + 1}</th> 
     <td>{user.email}</td> 
    <td><MakeAdmin user={user} refetch={refetch}/></td>
     <td>Canada</td> 
   </tr>
 </tbody>
   )  }
  </table>
</div>
        </div>
    );
};

export default AllUsers;