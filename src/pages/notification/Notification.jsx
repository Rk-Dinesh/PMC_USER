import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API, formatDate } from '../../Host';

const Notification = () => {
const user = localStorage.getItem('user')
    const [notify, setNotify] = useState([])
    useEffect(() => {
        fetchNotification();
    }, []);
  
    const fetchNotification = async () => {
      try {
        const response = await axios.get(`${API}/api/getnotifybyid?user=${user}`);
        const responseData = response.data.notify;
        setNotify(responseData);
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    <div className='mx-5 my-6 font-poppins font-extralight'>
        <p className='text-lg'>Notifications</p>
        <hr className="my-2 " />
        {notify && notify.map((data,index)=>(
        <div className='my-5' key={index}>
            <p><span className='font-normal'>Date :</span> {formatDate(data.createdAt)}</p>
            <p><span className='font-normal'>Subject :</span> {data.subject}</p>
            <p className='my-3'><span className='font-normal'>Description :</span> {data.description}</p>
            <hr className="my-4 " />
        </div>
        ))}
    </div>
  )
}

export default Notification