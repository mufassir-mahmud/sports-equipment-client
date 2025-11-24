import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthContext';
import { Link } from 'react-router';



const MyEquipment = () => {
   
  const {user} = useContext(AuthContext);
   const [myEquipments, setmyEquipments] = useState([]);
   useEffect(() =>{
      if (user?.email) {
      fetch(`http://localhost:4001/equipments?email=${user.email}`)
  .then(res => res.json())
  .then(data => setmyEquipments(data))
       
    }
   },[user])
   console.log(user.email, myEquipments)
    return (
        <div>
            <Navbar/>
            <div className='w-8/12 mx-auto flex justify-between items-center mt-5'>
              <h2 className='font-semibold text-2xl'>My Equipment</h2>  
            <Link to={'/add-equipment'}><button className='btn text-white bg-gradient-to-r from-blue-600 to-purple-600'>Add More Equipments</button></Link>  
            </div>
            
            <div className='flex gap-10 my-10 w-8/12 mx-auto'>
            
               {
                myEquipments.map(item =>   <div className='mt-10 '>
                    
            <div className="card mx-auto bg-base-100  w-60 md:w-80 shadow-sm">
  <figure>
    <div className='relative'>
        <img  className='transition-transform duration-700 ease-in-out hover:scale-110'
      src={item.photo}
      alt="Shoes" />
      <div className="badge badge-secondary  badge-primary absolute top-1 right-1 ">{item.category}</div>
    </div>
    
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.item}</h2>
    <p  className='text-xs'>{item.description.split(" ").slice(0,20).join(" ")}...</p>
    <div className=" w-full">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
        </div>)
            } 
            </div>
            
            <Footer/>
        </div>
    );
};

export default MyEquipment;