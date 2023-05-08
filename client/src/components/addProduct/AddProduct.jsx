import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <div>
        <form className="bg-white shadow-md rounded-lg px-8 py-6 my-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2">
                Name{" "}
              </label>
              <div>
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
                  id="password"
                  name="password"
                  required
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your password"
                />
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
  );
};

export default AddProduct;
