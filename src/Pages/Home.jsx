import React from 'react';
import Header from '../Components/Header';
import Services from '../Components/Services';
// import { useLoaderData } from 'react-router';
import Featured_Equipment from '../Components/Featured_Equipment';

const Home = () => {
    // const initialEquipment = useLoaderData();
    // console.log(initialEquipment)
    return (
        <div >
            <Header/>
            <Services/>
            {/* <div className='w-9/10 mx-auto'>
              
              <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center space-y-7 w-9/12 mx-auto'>
                {
                    initialEquipment.map(equipments => <Featured_Equipment equipments={equipments}></Featured_Equipment>)
                }
                
            </div>  
            <div className='text-center'>
                   <button className='btn btn-outline'>View Details</button>
                </div>
            </div> */}
            
            {/* <Featured_Equipment/> */}
        </div>
    );
};

export default Home;