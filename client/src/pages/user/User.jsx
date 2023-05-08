import { useContext } from "react";
import Banner from "../../components/shared/banner/Banner";
import { AuthContext } from "../../context/AuthProvider";
import no_avatar from "../.././assets/no_avatar.png";
import { useNavigate } from "react-router-dom";
import AddRecipes from "../../components/addRecipes/AddRecipes";
import { updateUserRole } from "../../utils/user/fetchUserRole";
const User = () => {
  const { user, logOutUser, setUser } = useContext(AuthContext);
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

  const handleAddModerator = async (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerId = form.sellerId.value;
    const role = "moderator";
    const userRole = await updateUserRole(sellerId, role);
  };

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
                    <p className="font-mono text-blue-400 -mt-2">
                      {" "}
                      {user && user.email}{" "}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="font-mono  border-2 py-2 px-6 border-red-500 text-lg mt-4 rounded-md font-semibold tracking-wider hover:bg-red-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {user && user?.role === "moderator" && (
              <form
                onSubmit={handleAddModerator}
                className="bg-white shadow-md px-8 py-6 my-6"
              >
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Moderator{" "}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
                  <div className="mb-4">
                    <label
                      htmlFor="sellerId"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Seller ID
                    </label>
                    <div>
                      <input
                        type="text"
                        id="sellerId"
                        name="sellerId"
                        className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                        placeholder="Enter Seller Id"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 "
                >
                  Add Moderator
                </button>
              </form>
            )}
          </div>
          <div>
            <AddRecipes />
          </div>
        </>
      }
    </div>
  );
};

export default User;
