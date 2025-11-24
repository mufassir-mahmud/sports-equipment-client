import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {
  const {user,logout} = useContext(AuthContext);
  console.log(user)  
  const handleLogout =() =>{
    logout()
    .then(() =>{

    })
    .catch(error =>{
      error.message
    })
  }
  return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to={'/'} className=''>Home</NavLink>
       <NavLink to={'/all-equipment'} className=''>All Equipment</NavLink>
        <NavLink to={'/add-equipment'} className=''>Add Equipment</NavLink>
        <NavLink to={'/my-equipment'}>My Equipment</NavLink>
      </ul>
    </div>
    <div>
        <a className="flex items-center gap-2" href="/" data-discover="true">
  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-trophy w-6 h-6 text-white"
      aria-hidden="true"
    >
      <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
      <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
      <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
      <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
    </svg>
  </div>
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    EquiSports
  </span>
</a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
      <NavLink to={'/'} className='btn btn-primary'> Home</NavLink>
       <NavLink to={'/all-equipment'} className='btn btn-primary'>All Equipment</NavLink>
        <NavLink to={'/add-equipment'} className='btn btn-primary'>Add Equipment</NavLink>
        <NavLink to={'/my-equipment'} className='btn btn-primary'>My Equipment</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-2 flex flex-col md:flex-row"> 
    {
      user ? <div className='navbar-end gap-2 flex flex-col md:flex-row' >
        <figure>
          <img
            src={user.photoURL}
            alt={user.displayName || "User photo"}
            className="w-10 h-10 rounded-full object-cover"
          /></figure> 
          <button className='btn text-white bg-gradient-to-r from-blue-600 to-purple-600' type='submit' onClick={handleLogout}>Logout</button>
      </div>   : <div className='navbar-end gap-2 flex flex-col md:flex-row'>
             <NavLink to={'/login'} className='btn text-white bg-gradient-to-r from-blue-600 to-purple-600
'>Login</NavLink>
    <NavLink to={'/register'} className='btn text-white bg-gradient-to-r from-blue-600 to-purple-600
'>Register</NavLink>
          </div>
    }
   
  </div>
</div>
        </div>
    );
};

export default Navbar;