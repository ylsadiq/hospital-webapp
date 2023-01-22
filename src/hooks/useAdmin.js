import { useEffect } from "react";
import { useState } from "react"
import auth from "../firebase.init";

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() =>{
        const email = user?.email;
        if(email){
            fetch(`https://hospitalwebapps-production.up.railway.app/admin/${email}`,{
              method: 'GET',
              headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
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