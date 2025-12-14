import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { InnerImageZoom } from 'react-inner-image-zoom';
import { AuthContext } from '../Provider/AuthContext';
import 'react-inner-image-zoom/lib/styles.min.css';
import { BsBox } from "react-icons/bs";
import { HiClock } from "react-icons/hi";
import { BiSolidCustomize } from "react-icons/bi";
const EquipmentDetails = () => {
    const { loading } = useContext(AuthContext);
    const details = useLoaderData();
    // console.log(details)
    const {category,price,name,item,email,description,customization,processing,ratings,photo,stock} = details;
    // console.log(photo)
    
    if (loading) {
        return <span className="loading loading-dots loading-xs"></span>
    }

    return (
        <div>
            <Navbar/>
            <div className='my-20 w-8/12 mx-auto flex gap-10'>
        <div className="flex flex-col lg:flex-row gap-12">

    {/* LEFT — MAIN IMAGE */}
    <div className="w-full lg:w-[600px] h-auto lg:h-[600px] rounded-xl overflow-hidden">
        <img src={photo} className='w-full' alt="" />
    </div>

    {/* RIGHT — DETAILS */}
    <div className="flex flex-col gap-4 w-full ">

        {/* Category Tag */}
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium w-fit">
            {category}
        </span>

        {/* Name */}
        <h1 className="text-xl lg:text-xl font-bold leading-tight">
            {name}
        </h1>

        {/* Rating + Number + Stock */}
        <div className="flex items-center gap-3 flex-wrap">
            <div className="rating rating-sm">
                <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" className="mask mask-star-2 bg-gray-300" readOnly />
            </div>

            <p className="font-medium text-gray-600 text-sm lg:text-base">{ratings}/5</p>

            <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">
                In Stock
            </span>
        </div>

        {/* Price */}
        <p className="text-xl lg:text-xl font-semibold text-gray-800">
            ${price}
        </p>

        {/* Description */}
        <div>
            <h2 className="text-lg font-semibold mb-1">Description</h2>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-sm">
                {description}
            </p>
        </div>

        {/* Stock + Processing Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

            <div className="flex items-center gap-3 border px-4 py-3 rounded-xl">
                <i className="fa-solid fa-box text-blue-500 text-xl"></i>
                <div>
                    <div className='flex items-center gap-3'><p className="text-sm text-gray-500">Stock Status</p> <BsBox  className='text-blue-400' /></div>
                    <p className="font-medium">{stock} units available</p>
                </div>
            </div>

            <div className="flex items-center gap-3 border px-4 py-3 rounded-xl">
                <i className="fa-solid fa-clock text-blue-500 text-xl"></i>
                <div>
                    <div className='flex items-center gap-3'><p className="text-sm text-gray-500">Processing Time</p> <HiClock className='text-blue-400' /></div>
                    
                    <p className="font-medium">{processing} Days</p>
                </div>
            </div>

        </div>

        {/* Customization */}
        <div className="mt-3">
          <div className='flex items-center gap-3'><h3 className="font-semibold text-lg">Customization Options</h3> <BiSolidCustomize className='text-blue-400' />
</div>  
            <p className="text-gray-600 text-sm lg:text-base">{customization}</p>
        </div>

        {/* Seller Info */}
        <div className="mt-3 bg-blue-100 p-2 rounded-2xl ">
            <div className='ml-2'>
                <h3 className="font-semibold text-lg">Seller Information</h3>
            <p className="text-gray-600 text-sm lg:text-base">{item}</p>
            <p className="text-gray-600 text-sm lg:text-base">{email}</p>
            </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <button className="btn bg-black text-white px-8 w-full sm:w-auto">
                Add to Cart
            </button>

            <button className="btn btn-outline px-8 w-full sm:w-auto">
                Add to Wishlist
            </button>
        </div>

    </div>
</div>

            </div>
            <Footer/>
        </div>
    );
};

export default EquipmentDetails;
