import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useLoaderData } from 'react-router';

const AllEquipment = () => {
    const initalEquipment = useLoaderData();
    const [equipments, setEquipments] = useState(initalEquipment);

    return (
        <div className='md:w-11/12 mx-auto'>
            <Navbar/>
            <div className="overflow-x-auto">
                <div className='flex justify-between items-center my-10'>
                    <div>
                        <h3>All Sports Equipment</h3>
                        <p>Browse our complete collection of sports equipment</p>
                    </div>
                    <div>
                        <button>Short by price</button>
                    </div>
                </div>
                <table className="table mt-10">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Stocks</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            equipments.map((equipment, index) => (
                                <tr key={equipment.id || index}>
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={equipment.photo}
                                                        alt={equipment.item}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{equipment.item}</div>
                                                
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="text-sm opacity-50">{equipment.category}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{equipment.price}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{equipment.ratings}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold ">{equipment.stock}</div>
                                    </td>
                                    

                                    <th> 
                                        <Link to={`/equipment-details/${equipment._id}`}><button className='btn text-white bg-gradient-to-r from-blue-600 to-purple-600'>Details</button></Link>
                                        
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllEquipment;
