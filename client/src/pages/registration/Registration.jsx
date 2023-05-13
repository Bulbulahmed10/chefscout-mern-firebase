import React, { useContext, useState } from "react";
import Banner from "../../components/shared/banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import firebaseErrorEdit from "../../utils/firebaseAuthEdit";
import toastConfig from "../../utils/toastConfig";

const Registration = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageLink = form.photoUrl.value;

    if (password.length > 5) {

      createUser(email, password)
        .then(() => {
          setUser(null)
          if (name && email) {
            updateUser(name, imageLink)
              .then(() => {})
              .catch((err) => {
                const firebaseNotification = firebaseErrorEdit(err);
                toast.error(firebaseNotification, toastConfig);
              });
          }
          toast.success("Registration successful!");
          navigate("/login");
        })
        .catch((err) => {
          const firebaseNotification = firebaseErrorEdit(err);
          toast.error(firebaseNotification, toastConfig);
        });
    } else {
      toast.error("Password must be at least 6 characters", toastConfig);
    }
  };

  return (
    <>
      <div>
        <Banner
          bannerText="Registration"
          bannerImage="https://images.unsplash.com/photo-1546241072-48010ad2862c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>

      <div className="flex items-center justify-center bg-gray-100 ">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleRegistrationSubmit}
            className="bg-white shadow-md rounded-lg px-8 py-6 my-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2">
                Name{" "}
                <span className="text-sm font-Raleway ml-2 font-semibold tracking-wider">
                  ( Optional )
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your password"
                />
                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={handlePasswordToggle}>
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="photoUrl"
                className="block text-gray-700 font-medium mb-2">
                Avatar Link
                <span className="text-sm font-Raleway ml-2 font-semibold tracking-wider">
                  ( Optional )
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="photoUrl"
                  name="photoUrl"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your avatar link"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ">
              Register
            </button>
            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-600 text-sm">
                Have an account? Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
