import React, { useContext, useState } from "react";
import Ratings from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { toast } from "react-hot-toast";
import SingleRecipeInfo from "../singleRecipeInfo/SingleRecipeInfo";
import { RecipesAndChefsContext } from "../../layouts/Layout";
import { AuthContext } from "../../context/AuthProvider";
import toastConfig from "../../utils/toastConfig";
import { useNavigate } from "react-router-dom";
const SingleRecipeCard = ({ recipe }) => {
  const { user } = useContext(AuthContext);
  const { name, price, recipe_id, recipe_image_url, rating } = recipe;
  const { chefs } = useContext(RecipesAndChefsContext);
  const [chefInfo, setChefInfo] = useState({});
  const navigate = useNavigate()


  const findChefByRecipe = (recipeId) => {
    const findChef =
      chefs && chefs.find((chef) => chef.recipes_id.includes(recipeId));
    const { chef_id, chef_name } = findChef && findChef;
    setChefInfo({ chef_id, chef_name });
  };

  const handleAddToCart = () => {
    if (user) {
      const cartInfo = {
        email: user.email,
        recipeName: name,
        image: recipe_image_url,
        price: price,
        recipeId: recipe_id,
        quantity: 1,
      };
      fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            toast.success("Cart added successfully", toastConfig);
          } else {
            toast.error("Something went wrong, try again", toastConfig);
          }
        });
    } else {
      navigate("/login")
    }
  };

  return (
    <div className="flex flex-col mb-10 bg-white p-4 rounded-sm">
      <div className="h-[300px] overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-sm transition-transform duration-300 hover:scale-150 transform-gpu overflow-hidden"
          src={recipe_image_url}
          alt={name}
        />
      </div>

      <div className="flex items-center justify-between my-2">
        <h2 className="font-Raleway font-bold text-xl text-slate-600 ">
          {name}
        </h2>
        <Ratings
          className="text-base mt-2"
          placeholderRating={rating}
          placeholderSymbol={<AiFillStar className="text-[#FF8A48]" />}
          emptySymbol={<AiFillStar />}
          readonly
        />
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center  gap-3">
          <p className="text-2xl font-mono text-[#f9aa3b] font-bold">
            ${price}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 border border-yellow-500 font-Raleway tracking-wider font-bold text-slate-600 hover:bg-yellow-100 rounded-md ">
            Add Cart
          </button>
          <label
            htmlFor={`my-modal-${recipe_id}`}
            onClick={() => findChefByRecipe(recipe_id)}
            className="btn bg-yellow-300 px-3 text-lg rounded-md hover:bg-yellow-400 border-none text-black">
            <FiEye />
          </label>
          <SingleRecipeInfo
            id={`my-modal-${recipe_id}`}
            recipe={recipe}
            chefInfo={chefInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCard;
