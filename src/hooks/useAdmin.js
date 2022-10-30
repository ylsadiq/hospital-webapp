import { useEffect } from "react";
import { useState } from "react"
import auth from "../firebase.init";

const useAdmin = user =>{
    const [admin, setAdmin] = useState(auth);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() =>{
        const {email} = user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`,{
              method: 'GET',
              headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res => res.json())
        .then(data => {
          setAdmin(data?.admin)
          setAdminLoading(false)}
          )
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;