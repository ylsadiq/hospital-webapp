import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import MakeAdmin from './MakeAdmin';
import { useState } from 'react';
import AllUsersModal from './AllUsersModal/AllUsersModal';

const AllUsers = () => {
  const [deletId, setDeleteId] = useState(null);

    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://healing-hospitalserver.up.railway.app/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()))
    console.log(deletId);
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
    <td><span className="badge-sm">
    <label
    htmlFor="user-modal"
    onClick={() => setDeleteId(user?._id)}
    className="btn btn-error btn-xs"><FontAwesomeIcon icon={faTrashCan}/></label></span></td>
   </tr>
 </tbody>
    )}
  </table>
</div>
    {deletId && <AllUsersModal deletId={deletId} refetch={refetch}/>}
        </div>
    );
};

export default AllUsers;