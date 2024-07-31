import React, { useState } from 'react';
import './LoginSignUp.css';
import { useNavigate } from 'react-router-dom'


const LoginSignUp = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.keys(errors).length === 0) {
      // Form submission logic (e.g., send data to backend)
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'Required';
    if (!formData.lastName) errors.lastName = 'Required';
    if (!formData.email) errors.email = 'Required';
    if (!formData.phone) errors.phone = 'Required';
    if (!formData.location) errors.location = 'Required';
    if (!formData.password) errors.password = 'Required';
    if (!formData.confirmPassword) errors.confirmPassword = 'Required';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    setErrors(errors);
  };

  return (
    <div className="signup-form" style={{ display: showForm ? 'block' : 'none' }}>
      <div className="close-btn" onClick={() => navigate('/')}>×</div>
      <img className="LogoImg" src={`static/media/Logo2.png`} alt="LogoImg" />
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <input
          type="email"
          name="email"
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
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <select
          name="location"
          value={formData.location}
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
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="toggle-password" onClick={handlePasswordToggle}>
            {passwordToggle ? 'Hide' : 'Show'}
          </span>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
        <div className="password-field">
          <input
            type={confirmPasswordToggle ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span
            className="toggle-password"
            onClick={handleConfirmPasswordToggle}
          >
            {confirmPasswordToggle ? 'Hide' : 'Show'}
          </span>
        </div>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <label className="remember-me">
          <input
            type="checkbox"
            name="remember"
            checked={formData.rememberMe}
            onChange={(e) =>
              setFormData({ ...formData, rememberMe: e.target.checked })
            }
          />
          Remember me
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <div className="social-signup">
        <button className="google">Sign Up with Google</button>
        <button className="facebook">Sign Up with Facebook</button>
      </div>
      <p>Already Have an Account? <a href="/login">Login</a></p>
    </div>
  );
};

export default LoginSignUp;