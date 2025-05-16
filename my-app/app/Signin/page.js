'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ label, name, value, onChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        required
        autoComplete={name === 'password' ? 'current-password' : 'new-password'}
        aria-label={label}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-emerald-600"
        tabIndex={-1}
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

const Page = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => setIsRegistering(!isRegistering);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation & submit logic here

    if (isRegistering && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert(isRegistering ? 'Registering...' : 'Signing in...');
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">
          {isRegistering ? 'Create an Account' : 'Sign In to Your Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isRegistering && (
  <>
    <div className="flex gap-4">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 min-w-0"
        required
        autoComplete="given-name"
        aria-label="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 min-w-0"
        required
        autoComplete="family-name"
        aria-label="Last Name"
      />
    </div>

    <input
      type="tel"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      placeholder="Mobile Number"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
      required
      autoComplete="tel"
      aria-label="Mobile Number"
      pattern="^\+?\d{10,15}$"
      title="Enter a valid mobile number"
    />
  </>
)}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
            autoComplete="email"
            aria-label="Email Address"
          />

          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          {isRegistering && (
            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}

          {!isRegistering && (
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-emerald-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Forgot Password flow not implemented yet.');
                }}
              >
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-200 font-semibold text-lg"
          >
            {isRegistering ? 'Register' : 'Sign In'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-700 text-sm">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={toggleForm}
            className="text-emerald-600 font-semibold hover:underline"
          >
            {isRegistering ? 'Sign In' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Page;
