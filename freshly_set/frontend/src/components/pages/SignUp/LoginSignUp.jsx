import React, { useState } from 'react';
import './LoginSignUp.css';
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import Nav from '../../Nav/Navbar';
import axios from 'axios';

const LoginSignUp = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

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

  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        const payload = {
            username: formData.email, // Assuming you want to use email as the username
            email: formData.email,
            password: formData.password,
            first_name: formData.firstName,
            last_name: formData.lastName,
            profile: {
                phone: formData.phone,
                location: formData.location,
                remember_me: formData.rememberMe, // Add rememberMe to profile
            },
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/freshlyapp/register/', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;

            if (response.status === 200) {
                alert('Signup successful!');
            } else {
                alert(data.error || 'Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during signup. Please try again later.');
        }
    }
};

  return (
    <div className="signup-form ">
      <Nav />
      <div className="flex justify-center mt-[100px]">
        <div className="flex flex-col lg:flex-row justify-between lg:px-[77px] lg:py-[88px] lg:w-[1197px] mx-[40px] my-[100px] bg-white  rounded-[132px]">
        
        {/* Left side */}
        <div className="block w-[] order-2 lg:order-1">
            <div>
              <img className="hidden lg:flex h-[193px] w-[187px]"src="/static/media/logo2.png" alt="Logo"/>
            </div>

            <h3 className="text-black font-inter text-[25px] font-[700] mx-[20px]">Sign Up with our community of farmers</h3>
            <div className="flex justify-center">
              <div className="block mx-[30px] lg:mx-[0px]">
                <p className=" mt-[28px] lg:w-[552px] font-josefin leading-[26px] text-[15px] text-start text-[#525560]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                <p className=" mt-[28px] lg:w-[552px] font-josefin leading-[26px] text-[15px] text-start text-[#525560]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
              </div>
            </div>
        </div>
        {/* Right side */}
        <div className="order-1 lg:order-2 w-[394px] ">
          <h2 className="text-black text-[30px] font-[700] font-inter">Create Your Profile</h2>

          <form className="space-y-[25px] lg:space-y-[20px]" onSubmit={handleSubmit}>
            <input
              type="text"
              className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-[#D9D9D9] font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <input
              type="text"
              name="lastName"
              className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-[#D9D9D9] font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto"

              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <input
              type="email"
              name="email"
              className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-[#D9D9D9] font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto"

              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-[#D9D9D9] font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto"

              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
            <select
              name="location"
              value={formData.location}
              className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-[#D9D9D9] font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto"
              onChange={handleChange}
              required
            >
              <option value="">Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
            {errors.location && <p className="error">{errors.location}</p>}
            <div className="password-field">
              <input
                type={passwordToggle ? 'text' : 'password'}
                className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-[#D9D9D9] font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto "

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
            {errors.password && <p className="error">{errors.password}</p>}
            <div className="password-field">
              <input
                type={confirmPasswordToggle ? 'text' : 'password'}
                name="confirmPassword"
                className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] bg-[#D9D9D9] font-[300] text-[15px]  text-black font-inter border-none pl-[11px] lg:pl-[26px] mx-auto "

                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="toggle-password hidden lg:flex" onClick={handleConfirmPasswordToggle}>
                {confirmPasswordToggle ? (<AiFillEyeInvisible className="text-black h-[33px] w-[45px]" />) : <BiShow className="text-black h-[33px] w-[45px]"/>}
              </span>
            </div>
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
             />


            <button
              type="submit"
              className="h-[58px] w-[300px] lg:w-[389px] lg: rounded-[13px] text-center text-[18px] font-[700] text-white  bg-[#408f30]  mt-[10px]"
            >
              Create Account
            </button>
          </form>
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
         <p>Already Have an Account? <a className="text-[#434AF6]" href="/login">Login</a></p>
        </div>
        
        </div>
        </div>
        
        </div>
  );
};

export default LoginSignUp;
