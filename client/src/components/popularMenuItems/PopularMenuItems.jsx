import React, { useContext, useEffect, useState } from "react";
import { RecipesAndChefsContext } from "../../layouts/Layout";

const PopularMenuItems = () => {
  const {recipes} = useContext(RecipesAndChefsContext)
  
  return (
    <div className="w-full max-w-[1280px] m-auto px-4">
      <h3 className="text-4xl mt-16 lg:mt-24 lg:text-6xl font-CoveredByYourGrace font-semibold tracking-wider text-center">
        Popular Recipes
      </h3>
      <p className="text-center mt-4 font-Raleway font-semibold w-full px-4 m-auto">
        Discover the dishes and ingredients that have captured the hearts and
        taste buds of our customers and readers. From classic comfort foods to
        trendy new recipes
      </p>
      <div className="mt-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-3">
          {recipes &&
            recipes.slice(4, 14).map((singleRecipe) => {
              const { recipe_id, name, price, recipe_image_url, instructions } =
                singleRecipe;
              return (
                <div
                  key={recipe_id}
                  className="flex justify-between items-center  mb-8">
                  <img
                    className="w-[40px] h-[40px] lg:w-[51px] lg:h-[51px] object-cover rounded-full"
                    src={recipe_image_url}
                    alt=""
                  />

                  <div className="basis-3/5 lg:-ml-8">
                    <p className=" border-b uppercase font-Raleway font-medium text-sm lg:text-base">
                      {name.length > 5 && name.slice(0, 30) + "..."}
                    </p>
                    <p className="text-[#888] text-sm font-Raleway mt-1">
                      {instructions &&
                        instructions.length > 45 &&
                        instructions.slice(0, 30) + "..."}
                    </p>
                  </div>
                  <p className="basis-1/5 text-lg lg:text-2xl font-Raleway font-medium  lg:tracking-wider">
                    $<span>{price} </span>.00
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PopularMenuItems;
