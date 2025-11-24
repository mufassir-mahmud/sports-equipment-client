import React from 'react';
import { useLoaderData } from 'react-router';

const EquipmentDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h2>Equipment details</h2>
        </div>
    );
};

export default EquipmentDetails;