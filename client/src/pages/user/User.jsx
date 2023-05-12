import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import Banner from "../../components/shared/banner/Banner";
import { AuthContext } from "../../context/AuthProvider";
import no_avatar from "../.././assets/no_avatar.png";
import { useNavigate } from "react-router-dom";
import AddAndUpdateRecipeForm from "../../components/addAndUpdateRecipeForm/addAndUpdateRecipeForm";
import { getUserRole, updateUserRole } from "../../utils/user/fetchUserRole";
import admin from "../../assets/admin.png";
import moderator from "../../assets/moderator.png";
import SingleRecipeInfoTable from "../../components/singleRecipeInfoTable/SingleRecipeInfoTable";
import { RecipesAndChefsContext } from "../../layouts/Layout";

const User = () => {
  const { recipes, setRecipes } = useContext(RecipesAndChefsContext);
  const { user, logOutUser, setUser } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [isModeratorFormShow, setIsModeratorFormShow] = useState(false);
  const [isAddRecipeFormShow, setIsAddRecipeFormShow] = useState(false);
  const [recipeUpdateForm, setRecipeUpdateForm] = useState(false);
  const [updateRecipeInfo, setUpdateRecipeInfo] = useState({});
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

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserRole(user);
      if (res.uid === user.uid) {
        setRole(res.role);
      }
    };
    fetchUser();
  }, []);

  const handleAddModerator = async (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerId = form.sellerId.value;
    const role = "moderator";
    const userRole = await updateUserRole(sellerId, role);
  };

  const handleModeratorFormShow = () => {
    setIsModeratorFormShow(!isModeratorFormShow);
    setIsAddRecipeFormShow(false);
  };

  const handleRecipeFormShow = () => {
    setIsAddRecipeFormShow(!isAddRecipeFormShow);
    setIsModeratorFormShow(false);
  };

  const handleDeleteRecipe = (recipeAndChefId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:4000/recipe", {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(recipeAndChefId),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const filteredRecipes = recipes.filter(
                (recipe) => recipe.recipe_id !== recipeAndChefId.recipe_id
              );
              setRecipes(filteredRecipes);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });

        fetch("http://localhost:4000/chef", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(recipeAndChefId),
        });
      }
    });
  };

  const handleUpdateRecipe = (singleRecipe) => {
    setIsAddRecipeFormShow(true);
    setRecipeUpdateForm(true);
    setUpdateRecipeInfo(singleRecipe);
  };

  const handleRecipeCancel = () => {
    setRecipeUpdateForm(false);
    setIsAddRecipeFormShow(false);
  };

  return (
    <div>
      <Banner
        bannerText={user && user?.displayName && user.displayName}
        bannerImage="https://images.unsplash.com/photo-1506159904226-d6cfd457c30c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
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
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {user && user?.displayName ? user.displayName : "Avatar"}
                  </h1>
                  {(role === "moderator" || role === "admin") && (
                    <img
                      className="w-9 h-9 myRoleElement"
                      src={role && role === "moderator" ? moderator : admin}
                      alt=""
                    />
                  )}
                  {role && role && (
                    <Tooltip anchorSelect=".myRoleElement" place="bottom">
                      <span className="font-bold capitalize text-blue-500">
                        {role && role}
                      </span>
                    </Tooltip>
                  )}
                </div>
                <p className="font-mono text-blue-400 -mt-2">
                  {user && user.email}
                </p>
                <button
                  onClick={handleLogout}
                  className="font-mono  border-2 py-2 px-6 border-red-500 text-lg mt-4 rounded-md font-semibold tracking-wider hover:bg-red-200">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center bg-white">
            <div className="tabs gap-6 mb-14">
              {role && role === "admin" && (
                <a
                  onClick={handleModeratorFormShow}
                  className={`tab tab-bordered text-xl font-Raleway font-bold  tracking-wider text-blue-500 ${
                    isModeratorFormShow && "tab-active"
                  }`}>
                  Add Moderator
                </a>
              )}
              {(role === "moderator" || role === "admin") && (
                <a
                  onClick={handleRecipeFormShow}
                  className={`tab tab-bordered text-xl font-Raleway font-bold  tracking-wider text-blue-500 ${
                    isAddRecipeFormShow && "tab-active"
                  }`}>
                  {recipeUpdateForm ? "Update Recipe" : "Add Recipe"}
                </a>
              )}
            </div>
          </div>
          {isModeratorFormShow && (
            <form
              onSubmit={handleAddModerator}
              className="bg-white shadow-md px-8 py-6 my-6 flex flex-col ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
                <div className="mb-4">
                  <label
                    htmlFor="sellerId"
                    className="block text-gray-700 font-medium mb-2">
                    User ID
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
                className=" h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ">
                Add Moderator
              </button>
            </form>
          )}
        </div>
        {isAddRecipeFormShow && (
          <AddAndUpdateRecipeForm
            recipeUpdateForm={recipeUpdateForm}
            setRecipeUpdateForm={setRecipeUpdateForm}
            handleRecipeCancel={handleRecipeCancel}
            updateRecipeInfo={updateRecipeInfo}
            setIsAddRecipeFormShow={setIsAddRecipeFormShow}
          />
        )}
      </div>

      {(role === "moderator" || role === "admin") && (
        <div>
          <h4 className=" text-end mr-28 text-lg py-3 font-mono">
            Total Recipes: {recipes && recipes.length}
          </h4>
          <div className="overflow-x-auto w-[85%] h-[800px] mb-10 m-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Serial Number</th>
                  <th>Recipe Name</th>
                  <th>Chef Name</th>
                  <th>Chef ID</th>
                  <th>Recipe ID</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {recipes &&
                recipes.map((recipe, index) => (
                  <SingleRecipeInfoTable
                    key={recipe.recipe_id}
                    recipe={recipe}
                    index={index}
                    handleDeleteRecipe={handleDeleteRecipe}
                    handleUpdateRecipe={handleUpdateRecipe}
                  />
                ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
