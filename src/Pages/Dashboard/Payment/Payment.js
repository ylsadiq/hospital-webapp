import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Payment = () => {
    const [payservice, setPayservice] = useState([]);
    const [user] = useAuthState(auth)
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    // const {data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url,{
    //     method: 'GET',
    //     headers:{
    //       'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res=>res.json()));
// Loading Data 
useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
         if(data._id === id){
            setPayservice(data);
         }
        })
}, [id])
 
    const handlePay = async () =>{
        const info  = await {
            cus_name: payservice?.patientName,
            cus_email: payservice?.patient,
            product_name: payservice?.treatment,
            product_slot:payservice?.slot,
            cus_phone: payservice?.phone
        }
        console.log(await info)
        fetch(`http://localhost:5000/init`,{
            method: 'POST',
            headers:{
                "content-type" :"application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }

    return (
        <div>
            <div className="card lg:w-4/6 card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{payservice?.treatment}</h2>
    <p>{payservice?.slot}</p>
    <p>{payservice?.date}</p>
    <div className="card-actions justify-end">
      <button onClick={handlePay} className="btn btn-primary">Pay</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Payment;