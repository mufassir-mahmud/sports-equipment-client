import React from 'react';

const EquipmentsCard = ({equipments}) => {
    const {photo,item,category,description} = equipments
    console.log(photo)
    // price,ratings,stock
    return (
       <div className='mt-10'>
            <div className="card mx-auto bg-base-100 w-60 md:w-80 shadow-sm">
  <figure>
    <div className='relative'>
        <img  className='transition-transform duration-700 ease-in-out hover:scale-110'
      src={photo}
      alt="Shoes" />
      <div className="badge badge-secondary  badge-primary absolute top-1 right-1 ">{category}</div>
    </div>
    
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item}</h2>
    <p  className='text-xs'>{description.split(" ").slice(0,20).join(" ")}...</p>
    <div className=" w-full">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EquipmentsCard;