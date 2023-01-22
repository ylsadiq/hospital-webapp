import React, { useState } from 'react'
import { toast } from 'react-toastify';

function DeleteDoctorsModal({deleteDoctor, refetch}) {
    const [control, setControl] = useState(true);

    const handelCancel = (deleteDoctor) => {
        const url = `https://hospitalwebapps-production.up.railway.app/doctor/${deleteDoctor}`;
        fetch(url, {
         method: "DELETE",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => res.json())
         .then((data) => {
         if (data.deletedCount) {
         setControl(!control);
         toast.success(`successfully Deleted ${deleteDoctor}`);
         refetch()
         }
      })
    };
  return (
    <>
    <input type="checkbox" id="doctor-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="doctor-modal" className="btn" onClick={() => handelCancel(deleteDoctor)} >Confirm</label>
      <label htmlFor="doctor-modal" className="btn">Cancle</label>
    </div>
  </div>
</div>
    </>
  )
}

export default DeleteDoctorsModal