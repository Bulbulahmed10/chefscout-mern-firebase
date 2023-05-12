import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
const SingleRecipeInfo = ({ id, recipe, chefInfo }) => {
  const {
    recipe_image_url,
    name,
    ingredients,
    instructions,
    calcium,
    rating,
    price,
    cooking_difficulty,
    cooking_time,
    eat_time,
  } = recipe;

  const [recipeInfo, setRecipeInfo] = useState("details");

  const handleInfoShow = (infoShowName) => {
    if (infoShowName === "details") {
      setRecipeInfo("details");
    } else if (infoShowName === "ingredients") {
      setRecipeInfo("ingredients");
    } else {
      setRecipeInfo("instructions");
    }
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={id}
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <div className="mt-10">
            <div className="flex justify-between">
              <div>
                <p className="font-Raleway text-2xl font-semibold text-slate-950 tracking-wide">
                  {name}
                </p>
                <p className="mb-1 font-StyleScript text-2xl tracking-wider mt-1 font-semibold text-slate-400">
                  By
                  <Link
                    className="ml-2 text-blue-500 font-semibold font-Raleway text-lg"
                    to={`/chef/${chefInfo?.chef_id}`}>
                    {chefInfo?.chef_name && chefInfo.chef_name}
                  </Link>
                </p>
                <div className="flex gap-2 items-center">
                  <Ratings
                    className="text-base mt-2"
                    placeholderRating={5}
                    placeholderSymbol={
                      <AiFillStar className="text-[#FF8A48]" />
                    }
                    emptySymbol={<AiFillStar />}
                    readonly
                  />
                  <p className="font-semibold text-blue-500">
                    (<span>{rating}</span> of 5)
                  </p>
                </div>
              </div>
              <BsBookmark className="text-xl mt-1 cursor-pointer" />
            </div>
            <div className="tabs my-4 ">
              <a
                onClick={() => handleInfoShow("details")}
                className={` tab tab-bordered ${
                  recipeInfo === "details" && "tab-active"
                } text-lg font-Raleway font-bold`}>
                Details
              </a>
              <a
                onClick={() => handleInfoShow("ingredients")}
                className={` tab tab-bordered ${
                  recipeInfo === "ingredients" && "tab-active"
                } text-lg font-Raleway font-bold`}>
                Ingredients
              </a>
              <a
                onClick={() => handleInfoShow("instructions")}
                className={` tab tab-bordered ${
                  recipeInfo === "instructions" && "tab-active"
                } text-lg font-Raleway font-bold`}>
                Directions
              </a>
            </div>
            {recipeInfo === "details" && (
              <img
                className="h-[300px] w-full object-cover rounded-md"
                src={recipe_image_url}
                alt=""
              />
            )}
            {recipeInfo === "ingredients" && (
              <div>
                {ingredients &&
                  ingredients.map((singleIngredient, index) => {
                    return (
                      <li
                        className="font-medium font-Raleway text-lg mb-2"
                        key={index}>
                        {singleIngredient}
                      </li>
                    );
                  })}
              </div>
            )}
            {recipeInfo === "instructions" && (
              <p className="font-Raleway font-medium">{instructions}</p>
            )}

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center text-center gap-1">
                <div className="bg-yellow-300">
                  <p className="font-bold px-2  ">{cooking_difficulty}</p>
                  <p className=" bg-yellow-800 px-2 py-1 text-white ">Level</p>
                </div>
                <div className="bg-yellow-300 ">
                  <p className="font-bold px-2 ">{cooking_time}</p>
                  <p className=" bg-yellow-800 px-2 py-1 text-white ">
                    Minutes
                  </p>
                </div>
                <div className="bg-yellow-300 ">
                  <p className="font-bold px-2 ">{calcium}</p>
                  <p className=" bg-yellow-800 px-2 py-1 text-white ">
                    Calcium
                  </p>
                </div>
                <div className="bg-yellow-300 ">
                  <p className="font-bold px-2 ">{eat_time}</p>
                  <p className=" bg-yellow-800 px-2 py-1 text-white ">
                    Eat time
                  </p>
                </div>
                <div className="bg-yellow-300 ">
                  <p className="font-bold px-2 ">
                    $<span>{price}</span>
                  </p>
                  <p className=" bg-yellow-800 px-2 py-1 text-white ">Price</p>
                </div>
              </div>
              <button className="bg-blue-500 px-1 py-4  text-white rounded-sm font-Raleway tracking-wider hover:bg-blue-600">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRecipeInfo;
