import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import AllEquipment from '../Pages/AllEquipment';
import AddEquipment from '../Pages/AddEquipment';

const HomeLayouts = () => {
    return (
        <div className=' md:w-11/12 mx-auto'>
            <Outlet/>
           
            
        </div>
    );
};

export default HomeLayouts;