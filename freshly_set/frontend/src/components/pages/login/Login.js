import React, { useState } from 'react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import Nav from '../../Nav/Navbar';
import axios from 'axios';

const Login = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',   
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState("")


  const handleLogin = async (e) => {
    e.preventDefault();
    
    // const loginData = {
    //   email: email,
    //   password: password,
    // };

    try {
      const response = await axios.post('http://localhost:8000/freshlyapp/token/', formData);
      const { access, refresh } = response.data;

      // Save tokens in localStorage or cookies
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Redirect user or update UI based on successful login
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error.response);
      setError('Invalid username or password');
    }
  };

  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  
  const handleSubmit = async (e) => {
   
  }; 

  const validateForm = () => {
    const errors = {};
  
    if (!formData.email) errors.email = 'Required';
    
    if (!formData.password) errors.password = 'Required';
    setErrors(errors);
  };

  return (
    <div className="signup-form h-[100vh]">
      <Nav />
      <div className="flex justify-center mt-[100px]">
        
        
        
        <div className="flex justify-center lg:px-[77px] lg:py-[88px] lg:w-[1197px] mx-[40px] my-[100px] bg-white  rounded-[132px]">
          <form onSubmit={handleLogin}>
            <div className="block space-y-[30.08px]">
            <h1>Login to Your Account</h1>

            <input      
            type="text"
            placeholder='Your Email'         
            className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-white font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto shadow-lg"
            />


            {/* Password */}

            <div className="password-field">
              <input
                type={passwordToggle ? 'text' : 'password'}
                className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-white font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto shadow-lg "

                name="password"
                placeholder="New Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-password hidden lg:flex" onClick={handlePasswordToggle}>
                {passwordToggle ? (<AiFillEyeInvisible className="text-black h-[33px] w-[45px]" />) : <BiShow className="text-black h-[33px] w-[45px]"/>}
              </span>

              
            </div>

            {/* <label className="remember-me">
              <input
                type="checkbox"
                name="remember"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
              />
              Remember me
            </label> */}
            <div className="flex justify-center">
              <button  className="standardBtnLong" type="submit">Sign Up</button>

            </div>
          </div>
          <div className="block space-y-[17px] lg:space-y-[0px] lg:flex lg:space-x-[32px] items-center">
          <div className="flex justify-center space-x-[30px] lg:space-x-[23px] items-center">
              <p className="text-black text-[15px] font-[700] whitespace-nowrap">Sign in With Google</p>
              <img className="h-[44px] w-[43px]" src="/static/media/googleIcon.png" alt="Google Image"/>
              
          </div>

          <div className="flex justify-center space-x-[30px] lg:space-x-[23px] items-center">
              <p className="text-black text-[15px] font-[700] whitespace-nowrap">Sign in With Facebook</p>
              <img className="h-[44px] w-[43px]" src="/static/media/facebookIcon.png" alt="Google Image"/>
              
          </div>
           
         </div>
         <p>Don't Have an Account? <a className="text-[#434AF6]" href="/signup">Signup</a></p>

          </form>
          
        </div>

        </div>
    </div>
          
      
  );
};

export default Login;