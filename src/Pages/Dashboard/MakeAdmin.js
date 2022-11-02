import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const MakeAdmin = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`https://floating-escarpment-89752.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }, [user])
        .then(res => {
            if(res.status === 403){
                toast.error('Authorization Failed');
            }
            return res.json()})
        .then(data =>{
            if(data.modifiedCount > 0){
                refetch()
                toast.success('succesfully made an admin!');
            }
        })
    }
    return (
        <div>
            {role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : null}
     <span className="badge-sm"><button className="btn btn-error btn-xs"><FontAwesomeIcon icon={faTrashCan}/></button></span>
     
        </div>
    );
};

export default MakeAdmin;