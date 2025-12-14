import React from 'react';
import Navbar from '../Components/Navbar';
// import Navbar from '../Components/Navbar';
import { IoFootball } from "react-icons/io5";
import { CiBasketball } from "react-icons/ci";
import { FaTableTennis } from "react-icons/fa";
import { IoBaseball } from "react-icons/io5";
import { FaPersonSwimming } from "react-icons/fa6";
import { BiCycling } from "react-icons/bi";
import { GiMuscleUp } from "react-icons/gi";
import { GiGolfFlag } from "react-icons/gi";
import { GiRunningNinja } from "react-icons/gi";
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from 'react-router';
const UpdateEquipment = () => {
    const navigate = useNavigate()
    const {_id,photo,item,category,price,ratings,stock,processing,customization,email,name,description} = useLoaderData();
    // console.log(photo)
    const handleUpdateEquipment = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedEquipment = Object.fromEntries(formData.entries());
        // console.log(updatedEquipment);
          Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-equipment-server-one.vercel.app/equipments/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedEquipment)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                Swal.fire("Saved!", "", "success");
            }
            navigate('/my-equipment');
        })
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    }
    return (
        <div className=' md:w-11/12 mx-auto'>
            <Navbar/>
            <div className="card bg-base-100 w-full mx-auto mt-5 max-w-xl shrink-0  shadow-2xl">
      <div className="card-body ">
        <div className='text-center'>
            <h2 className='font-semibold text-xl'>Update Your Equipment</h2>
            <p className='text-sm pt-3'>Fill in the details to Update sports equipment to the store</p>
        </div>
        <form action="" onSubmit={handleUpdateEquipment} >
          <fieldset className="fieldset grid grid-cols-2 gap-3">
            <div>
               <label className="label">Image URL</label>
          <input type="text" defaultValue={photo}  required className="input input-sm" placeholder="https://example.com/image.jpg" name="photo" /> 
            </div>
          <div>
            <label className="label">Item Name</label>
          <input type="text" name='item' defaultValue={item} required  className="input input-sm" placeholder="Professional Basketball" />
          </div>
          <div>
            <fieldset required className="fieldset select-sm ">
  <label className="label">Category</label>
  <select name='category' defaultValue={category} className="select text-xs select-xs">
    <option className='text-xs' disabled={true} >Select A Category</option>
    <option className='text-xs'><IoFootball />Football</option>
    <option className='text-xs'><CiBasketball />Basketball</option>
    <option className='text-xs'><FaTableTennis />Tennis</option>
    <option className='text-xs'><IoBaseball />Baseball</option>
    <option className='text-xs'><FaPersonSwimming />Swimming</option>
    <option className='text-xs'><BiCycling />Cycling</option>
    <option className='text-xs'><GiMuscleUp />Fitness</option>
    <option className='text-xs'><GiGolfFlag />Golf</option>
    <option className='text-xs'><GiRunningNinja />Running</option>
  </select>
 
</fieldset>
          </div>
          <div>
            <label className="label">Price</label>
          <input type="text" name='price' defaultValue={price} required className="input input-sm" placeholder="200" />
          </div>
          <div>
            <label className="label">Ratings</label>
          <input type="text" name='ratings' defaultValue={ratings} required className="input input-sm" placeholder="4.5" />
          </div>
          <div>
            <label className="label">Stock Quantity</label>
          <input type="number" name='stock' defaultValue={stock} required className="input input-sm" placeholder="10" />
          </div>
          <div>
            <label className="label">Processing Time</label>
          <input type="text" name='processing' defaultValue={processing} required className="input input-sm" placeholder="3-5 Working Days" />
          </div>
          <div>
            <label className="label">Customization Options</label>
          <input type="text" name='customization' defaultValue={customization} required className="input input-sm" placeholder="Custom color size" />
          </div>
          <div>
             <label className="label">User Email</label>
          <input type="email" name='email' defaultValue={email} required className="input input-sm"  placeholder="user@gmail.com" />
          </div>
          <div>
             <label className="label">User Name</label>
          <input type="text" name='name' defaultValue={name} required  className="input input-sm"  placeholder="John Athlete" />
          </div>
          <div  className='col-span-2'>
            <label className="label">Description</label> 
            <textarea name='description' defaultValue={description} placeholder="Detailed description of the equipment." className="textarea w-full "></textarea>
          </div>
          
          <div>
            <button className="btn btn-neutral w-full mt-4" type='submit' onSubmit={handleUpdateEquipment}>Update Equipment</button>
            
          </div>
          <div className='w-full'>
            <button type='submit' className="btn w-full btn-ghost mt-4">Cancel</button>
          </div>
        </fieldset>  
        </form>
        
      </div>
    </div>
        </div>
    );
};

export default UpdateEquipment;