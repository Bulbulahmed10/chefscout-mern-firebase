import React, { useContext, useState } from "react";
import Ratings from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import SingleRecipeInfo from "../singleRecipeInfo/SingleRecipeInfo";
import { RecipesAndChefsContext } from "../../layouts/Layout";
const SingleRecipeCard = ({ recipe }) => {
  const { name, price, recipe_id, recipe_image_url, rating } = recipe;
  const { chefs } = useContext(RecipesAndChefsContext);
  const [chefInfo, setChefInfo] = useState({});
  const findChefByRecipe = (recipeId) => {
    const findChef =
      chefs && chefs.find((chef) => chef.recipes_id.includes(recipeId));
    const {chef_id, chef_name } = findChef && findChef
    setChefInfo({chef_id, chef_name})
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
          <button className="px-4 py-2 border border-yellow-500 font-Raleway tracking-wider font-bold text-slate-600 hover:bg-yellow-100 rounded-md ">
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
