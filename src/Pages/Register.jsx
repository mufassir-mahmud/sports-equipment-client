import React, { useContext } from 'react';
import signUpAnimation from '../Animation/Sign up.json'
import Lottie from 'react-lottie-player';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
const Register = () => {
  const {createUser,setUser,updateUser,} = useContext(AuthContext)  ;
  // console.log(createUser)
  const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;  
        const photo = form.photo.value;
        const name = form.name.value;
        const formData = new FormData(form);
        const {email,password,  ...userInfo} = Object.fromEntries(formData);
        
        const newUser = {email,...userInfo};
        // console.log(newUser)
        // console.log(email,password, userInfo);
        createUser(email,password)
        .then(result =>{
          // console.log(result.user)
          
          const user = result.user;
          const setNewUser = { ...user, displayName: name, photoURL: photo };
          updateUser({displayName: name, photoURL: photo})
          // console.log(setNewUser)
          setUser(setNewUser)
          // console.log(setUser);
          fetch('http://localhost:4001/users', {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
          })
        })
        .catch(error =>{
          // console.log(error.message)
        })
    }
    return (
        <div>
            <div className="hero bg-purple-200 lg:w-6/12 mx-auto shadow-2xl  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center  lg:text-left">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center">Register Now</h1>
      <Lottie loop animationData={signUpAnimation} play className='w-full mx-auto lg:mx-0'>

      </Lottie>
    </div>
    <div className="card bg-gradient-to-r from-blue-600 to-purple-600 w-full  max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form action="" onSubmit={handleSignUp}>
            <fieldset className="fieldset">
          <label className="label text-white">Name</label>
          <input required type="text" className="input" name='name' pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash" placeholder="User Name" />
          <label className="label text-white">Phot URL</label>
          <input required type="text" className="input" name='photo' placeholder="https://" />
          <label className="label text-white">Email</label>
          <input required type="email" className="input" name='email' placeholder="Email" />
          <label className="label text-white">Password</label>
          <input required type="password" className="input" name='password'
    placeholder="Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"  />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral  bg-black mt-4" type='submit'>Sign Up</button>
          
          <p>Already Have An Account? Please  <Link to={'/login'} className='text-white'>Sign In</Link></p>
        </fieldset>
        </form>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;