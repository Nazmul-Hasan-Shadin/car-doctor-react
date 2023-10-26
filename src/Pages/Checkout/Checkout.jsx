import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";


const Checkout = () => {
    const service = useLoaderData();
    const {title,_id,price,img}=service;
    const {user}= useContext(AuthContext)
  const  checOutService=(event)=>{
    event.preventDefault()
    const form= event.target;
    const name = form.name.value;
    const date= form.date.value;
    const email= user?.email;

  const order= {
    
    email,
    date,
    img,
    service:title,
    price: price
  }
 console.log(order);
 
   axios.post('http://localhost:5001/bookings',order)
   .then(data=>{
      if (data.insertedId) {
        alert('data insert successfully')
      }
   })



    
  }

    return (

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={checOutService} className="card-body ">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-red-400">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          
          </label>
          <input type="text" defaultValue={user?.displayName}  name="name" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Date </span>
          </label>
          <input type="date" name="date" placeholder="password" className="input input-bordered" required />
     
        </div>



        <div className="form-control">
          <label className="label">
             Email Address
          </label>
          <input defaultValue={user?.email} type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue= { price} placeholder="password" className="input input-bordered" required />
     
        </div>
        <div className="form-control mt-6">
       

          <input className="btn btn-primary btn-block" type="submit" value={'order confirm'} />
        </div>
       </div>
      </form>
    </div>

    );
};

export default Checkout;