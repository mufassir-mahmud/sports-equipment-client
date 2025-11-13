import React from 'react';
import { MdWorkspacePremium } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";

const Services = () => {
    return (
       <div className='w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-7 '>
        <div className='flex items-center gap-3 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl'>
            <MdWorkspacePremium className='text-6xl text-primary' />
            <div>
                <h4 className='text-md font-semibold'>Premium Quality</h4>
                <p className='text-xs'>All products are certified and tested for professional standards</p>
            </div>
        </div>
        <div className='flex items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl'>
            <TbTruckDelivery className='text-6xl text-error' />
            <div>
                <h4 className='text-md font-semibold'>Fast Delivery</h4>
                <p className='text-xs'>Quick processing and shipping to get you ready faster</p>
            </div>
        </div>
        <div className='flex items-center gap-3 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl'>
            <FaArrowTrendUp className='text-6xl text-accent ' />
            <div>
                <h4 className='text-md font-semibold'>Best Prices </h4>
                <p className='text-xs'>Competitive pricing with regular deals and discounts</p>
            </div>
        </div>
       </div>
    );
};

export default Services;