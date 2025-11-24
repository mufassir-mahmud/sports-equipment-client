import React, { useContext } from 'react';
import loginAnimation from '../Animation/login.json';
import Lottie from 'react-lottie-player';
import { AuthContext } from '../Provider/AuthContext';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
  const { loginUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate helper
  const redirectAfterLogin = () => {
    navigate(location.state?.from?.pathname || "/");
  };

  const handleGoogle = e => {
    e.preventDefault();
    signInGoogle()
      .then(result => {
        console.log(result);
        redirectAfterLogin(); // ✅ navigate after success
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        console.log(result);
        redirectAfterLogin(); // ✅ navigate after success
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-10/12 max-w-xs shrink-0">
            <h1 className="text-4xl text-center font-bold">Login now!</h1>
            <Lottie loop animationData={loginAnimation} play />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    className="input"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                </fieldset>
                <button className="btn btn-neutral w-full mt-4" type="submit">
                  Login
                </button>
                <div className="divider">OR</div>
                <button
                  className="btn btn-neutral w-full mt-4"
                  onClick={handleGoogle}
                >
                  Login In With Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
