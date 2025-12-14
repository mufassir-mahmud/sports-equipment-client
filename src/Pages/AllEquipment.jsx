import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLoaderData } from "react-router";

const AllEquipment = () => {
    const initialEquipment = useLoaderData();
    const [equipments, setEquipments] = useState(initialEquipment);
    const [sortOrder, setSortOrder] = useState("asc"); // asc | desc

    // SORT FUNCTION
    const handleSortByPrice = () => {
        let sorted = [...equipments].sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );

        setEquipments(sorted);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div className="md:w-11/12 mx-auto">
            <Navbar />

            {/* HEADER */}
            <div className="flex justify-between items-center my-10">
                <div>
                    <h3 className="text-2xl font-bold">All Sports Equipment</h3>
                    <p className="text-gray-500">
                        Browse our complete collection of sports equipment
                    </p>
                </div>

                <button 
                    onClick={handleSortByPrice}
                    className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                    Sort by Price {sortOrder === "asc" ? "↑" : "↓"}
                </button>
            </div>

            {/* RESPONSIVE TABLE */}
            <div className="overflow-x-auto hidden md:block">
                <table className="table mt-6">
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
                        {equipments.map((equipment, index) => (
                            <tr key={equipment._id}>
                                <th>{index + 1}</th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={equipment.photo} alt={equipment.item} />
                                            </div>
                                        </div>
                                        <div className="font-bold">{equipment.item}</div>
                                    </div>
                                </td>

                                <td className="text-gray-500">{equipment.category}</td>
                                <td className="font-bold">${equipment.price}</td>
                                <td>{equipment.ratings}</td>
                                <td>{equipment.stock}</td>

                                <td>
                                    <Link to={`/equipment-details/${equipment._id}`}>
                                        <button className="btn text-white bg-gradient-to-r from-blue-600 to-purple-600">
                                            Details
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MOBILE VIEW — CARDS */}
            <div className="grid grid-cols-1 gap-5 md:hidden">
                {equipments.map((equipment, index) => (
                    <div 
                        key={equipment._id} 
                        className="p-4 border rounded-xl bg-white shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={equipment.photo}
                                className="h-20 w-20 rounded-lg object-cover"
                            />
                            <div>
                                <h3 className="font-bold">{equipment.item}</h3>
                                <p className="text-gray-500 text-sm">{equipment.category}</p>
                            </div>
                        </div>

                        <div className="mt-3 flex justify-between">
                            <p className="font-bold text-blue-600">${equipment.price}</p>
                            <p>⭐ {equipment.ratings}</p>
                        </div>

                        <div className="mt-2 text-sm text-gray-600">
                            Stock: {equipment.stock}
                        </div>

                        <Link to={`/equipment-details/${equipment._id}`}>
                            <button className="btn w-full mt-4 text-white bg-gradient-to-r from-blue-600 to-purple-600">
                                Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllEquipment;
