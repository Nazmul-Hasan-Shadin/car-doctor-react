import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {user}= useContext(AuthContext);
    const [bookings,setBookings]= useState([])
    const url= `http://localhost:5001/bookings?email=${user?.email}`
    useEffect(()=>{
     fetch(url)
     .then(res=>res.json())
     .then(data=> setBookings(data))  
    },[url])

    const handleDelete = id=>{
        const proceed= confirm('Are You Sure you want delete');
        if (proceed) {
          fetch(`http://localhost:5001/bookings/${id}`,{
          method: 'DELETE',
        
          })
          .then(res=>res.json())
          .then(data=>{
            if (data.deletedCount>0) {
                alert('deleted successfull')
                const remaining= bookings.filter(booking=>booking._id !== id ) ;
                setBookings(remaining)
            }
          })
        }
    }


    const handleBookingConfirm =id=>{
        fetch(`http://localhost:5001/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
             if (data.modifiedCount>0) {
                // update state
           const remaining= bookings.filter(booking=>booking._id!==id);
           const update = bookings.find(booking=>booking._id===id)
              update.status='confirm'
            const newBookings= [update,...remaining];
            setBookings(newBookings);

             }
        })
    }

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>services</th>
        <th>Date </th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

 {
    bookings.map(booking=> <BookingRow key={booking._id}
       booking={booking}
       handleDelete={handleDelete}
       handleBookingConfirm={handleBookingConfirm}
    
    ></BookingRow>)
 }



    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;