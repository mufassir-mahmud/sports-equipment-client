import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import AllEquipment from '../Pages/AllEquipment';
import AddEquipment from '../Pages/AddEquipment';
import Featured_Equipment from '../Components/Featured_Equipment';
import ShopBy from '../Components/ShopBy';
import Footer from '../Components/Footer';

const HomeLayouts = () => {
    return (
        <div>
              <div className=' md:w-11/12 mx-auto'>
            <Outlet></Outlet>
           
            <Featured_Equipment/>
            <ShopBy/>
            
        </div>
        <Footer/>
        </div>
        
    );
};

export default HomeLayouts;