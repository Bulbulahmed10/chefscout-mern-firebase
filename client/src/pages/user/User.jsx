import React, { useContext } from "react";
import Banner from "../../components/shared/banner/Banner";
import { AuthContext } from "../../context/AuthProvider";
import no_avatar from "../.././assets/no_avatar.png";
import { useNavigate } from "react-router-dom";
import AddProduct from "../../components/addProduct/AddProduct";
const User = () => {
  const { user, logOutUser, setUser } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userId = ["DV7Rxk7f6aYKUKDaQIJ4t2wWXRn1", "kI4dtZv4M4gliFrmauJ14mkBfCA3"]

  return (
    <div>
      <Banner
        bannerText={user && user?.displayName && user.displayName}
        bannerImage="https://images.unsplash.com/photo-1506159904226-d6cfd457c30c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      {
        <>
        <div>
          <div className="w-full bg-white shadow-md">
            <div className="container mx-auto py-6 px-4">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  <img
                    src={user && user?.photoURL ? user.photoURL : no_avatar}
                    className="rounded-full w-64 h-64 object-cover mx-auto"
                  />
                </div>
                <div className="w-full lg:w-2/3 px-4">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {user && user?.displayName ? user.displayName : "Avatar"}
                  </h1>
                  <p className="font-mono text-blue-400 -mt-2"> {user && user.email } </p>
                  <button
                    onClick={handleLogout}
                    className="font-mono  border-2 py-2 px-6 border-red-500 text-lg mt-4 rounded-md font-semibold tracking-wider hover:bg-red-200">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <AddProduct />
        </div>
        </>
      }
    </div>
  );
};

export default User;
