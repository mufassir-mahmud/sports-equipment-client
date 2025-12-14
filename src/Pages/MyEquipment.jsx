import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
const MyEquipment = () => {
  const handleDelete = (_id) =>{
    // console.log(_id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  // console.log(result.isConfirmed)
  if (result.isConfirmed) {
   fetch(`http://localhost:4001/equipments/${_id}`, {
    method: 'DELETE'
   })
   .then(res => res.json())
   .then(data =>{
    if(data.deletedCount){
      const remainingEquipment = myEquipments.filter((item) => item._id !== _id);
      setmyEquipments(remainingEquipment)
       Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
   })
  }
});
  }
  // const handleUpdate = () => {
  //   Swal.fire({
  //     title: "Do you want to save the changes?",
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: "Save",
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Saved!", "", "success");
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
  // };
  const { user } = useContext(AuthContext);
  const [myEquipments, setmyEquipments] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4001/equipments?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setmyEquipments(data));
    }
  }, [user]);
  console.log(user.email, myEquipments);
  return (
    <div>
      <Navbar />
      <div className="w-8/12 mx-auto flex justify-between items-center mt-5">
        <h2 className="font-semibold text-2xl">My Equipment</h2>
        <Link to={"/add-equipment"}>
          <button className="btn text-white bg-gradient-to-r from-blue-600 to-purple-600">
            Add More Equipments
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 w-8/12 mx-auto">
        {myEquipments.map((item) => (
          <div className="mt-10 ">
            <div className="card mx-auto bg-base-100  w-60 md:w-80 shadow-sm">
              <figure>
                <div className="relative">
                  <img
                    className="transition-transform duration-700 ease-in-out hover:scale-110"
                    src={item.photo}
                    alt="Shoes"
                  />
                  <div className="badge badge-secondary  badge-primary absolute top-1 right-1 ">
                    {item.category}
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.item}</h2>
                <p className="text-xs">
                  {item.description.split(" ").slice(0, 20).join(" ")}...
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
  <Link to={`/equipment-details/${item._id}`}>
    <button className="btn btn-accent">Details</button>
  </Link>
  <Link to={`/update-equipment/${item._id}`}>
    <button className="btn btn-primary flex items-center gap-1">
      Update <GrUpdate />
    </button>
  </Link>
  
    <button
    className="btn btn-error flex items-center gap-1"
    onClick={() => handleDelete(item._id)}
  >
    Delete <RiDeleteBin5Fill />
  </button>
  
  
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MyEquipment;
