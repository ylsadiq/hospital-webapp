import React, { useState } from 'react';
import { toast } from 'react-toastify';

function AllUsersModal({deletId, refetch}) {
    const [control, setControl] = useState(true);

    const handelCancel = (deletId) => {
        const url = `https://healing-hospitalserver.up.railway.app/users/${deletId}`;
        fetch(url, {
         method: "DELETE",
        })
        .then((res) => res.json())
         .then((data) => {
         if (data.deletedCount) {
         setControl(!control);
         toast.success(`successfully Deleted ${deletId}`);
         refetch()
         }
      })
    };
    return (
        <div>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    <label htmlFor="user-modal" onClick={() => handelCancel(deletId)} className="btn">Confirm</label>
                    <label htmlFor="user-modal" className="btn">Cancle</label>
            </div>
                </div>
                </div>
        </div>
    );
}

export default AllUsersModal;