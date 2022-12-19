import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import MakeAdmin from './MakeAdmin';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
  const [isUser, setIsUser] = useState(false);

    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://healing-hospitalserver.up.railway.app/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()))
    if(isLoading){
        return <button className="btn loading">loading</button>
    }

    const handelCancel = (id) => {
      console.log(id);
      const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
        const url = `https://healing-hospitalserver.up.railway.app/users/${id}`;
        fetch(url, {
         method: "DELETE",
         headers:{
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        
        })
        .then((res) => {
          console.log(res, 'res');
          res.json()})
         .then((data) => {
          console.log('delete UserId', data);
         if (data.deletedCount) {
          setIsUser(!isUser);
         toast.success(`successfully Deleted ${id}`);
         window.location.reload();
         }
   })
    }
  };
    
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
    <td><span className="badge-sm"><button
        onClick={() => handelCancel(user?._id)}
         className="btn btn-error btn-xs"><FontAwesomeIcon icon={faTrashCan}/></button></span></td>
   </tr>
 </tbody>
   )  }
  </table>
</div>
        </div>
    );
};

export default AllUsers;