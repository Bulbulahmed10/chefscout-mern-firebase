import React, { useContext, useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Banner from "../../components/shared/banner/Banner";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import firebaseErrorEdit from "../../utils/firebaseAuthEdit";

const toastConfig = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    textAlign: "center",
  },
  duration: 5000,
};

const Login = () => {
  const { setUser, googleSignIn, githubSignIn, signInUser, setLoading } =
    useContext(AuthContext);
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const signInUser = result;
        console.log(signInUser);
        setUser(signInUser);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        const firebaseNotification = firebaseErrorEdit(err);
        toast.error(firebaseNotification, toastConfig);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const signInUser = result.user;
        setUser(signInUser);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        const firebaseNotification = firebaseErrorEdit(err);
        toast.error(firebaseNotification, toastConfig);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const loginInUser = result.user;
        toast.success("User Login Successfully", toastConfig);
        setUser(loginInUser);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        const firebaseNotification = firebaseErrorEdit(err);
        toast.error(firebaseNotification, toastConfig);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <Banner
          bannerText="Login"
          bannerImage="https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        />
      </div>
      <div className="flex items-center justify-center bg-gray-100 ">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg px-8 py-6 my-6">
          <form onSubmit={handleSignIn}>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
            <button
              type="submit"
              className="w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ">
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <div>
              <p className="font-Raleway font-medium text-slate-500">
                Login in with
              </p>
              <div className="flex justify-center my-2 ">
                <button
                  onClick={handleGoogleSignIn}
                  className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                  <BsGoogle />
                </button>
                <button
                  onClick={handleGithubSignIn}
                  className="w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center mr-2">
                  <BsGithub />
                </button>
              </div>
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-600 text-sm">
                Don't have an account? Register here
              </Link>
            </div>
          </div>
          {/* <p className="text-center mt-2 font-semibold text-sm text-gray-500 cursor-pointer hover:text-gray-600 ">
            Forgot password?
          </p> */}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Login;
