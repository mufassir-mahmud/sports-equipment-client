import React, { use } from 'react';
// import { useLoaderData, Navigate } from 'react-router';
import EquipmentsCard from './EquipmentsCard';
import { Link, useNavigate } from 'react-router';
const featurePromise = fetch('http://localhost:4001/equipments').then(res => res.json())
//  console.log(featurePromise)
const Featured_Equipment = () => {
   const initialEquipment = use(featurePromise);
//    const navigate = useNavigate() 
//    console.log(initialEquipment)
    return (
       <div className='w-9/10 mx-auto'>
                     <div className='text-center'>
                        <h2 className='text-2xl font-semibold'>Featured Equipment</h2>
                        <p className='text-[#a0a5ae]'>Discover our handpicked selection of premium sports equipment designed for champions</p>
                     </div>
                     <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center space-y-7 w-9/12 mx-auto'>
                       {
                           initialEquipment.slice(0,6).map(equipments => <EquipmentsCard equipments={equipments}></EquipmentsCard>)
                       }
                       
                   </div>  
                   <div className='text-center'>
                       <Link to={'/all-equipment'}><button className='btn btn-outline' >  View Details</button></Link>   
                       </div>
                   </div>
    );
};

export default Featured_Equipment;