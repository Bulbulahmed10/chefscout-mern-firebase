import React, { useContext, useEffect, useState } from "react";
import Banner from "../../components/shared/banner/Banner";
import { useParams } from "react-router-dom";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineFastfood } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import Loading from "../../components/Loading/Loading";
import { RecipesAndChefsContext } from "../../layouts/Layout";

const Chef = () => {
  const { recipes, chefs } = useContext(RecipesAndChefsContext);
  const params = useParams();
  const [chef, setChef] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findChef = chefs.find((chef) => chef.chef_id === params.id) || {};
    setChef(findChef);
    setIsLoading(false);
  }, []);

  const filteredRecipes =
    recipes.filter((recipe) => chef?.recipes_id?.includes(recipe.recipe_id)) ||
    [];

  return (
    <div>
      <Banner
        bannerText={`${chef?.chef_name && chef.chef_name}`}
        bannerImage="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="bg-gray-100 min-h-screen">
            <div className="w-full bg-white shadow-md">
              <div className="container mx-auto py-6 px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                    <img
                      src={chef && chef?.chef_photo && chef.chef_photo}
                      alt={chef && chef?.chef_name && chef.chef_name}
                      className="rounded-full w-64 h-64 object-cover mx-auto"
                    />
                  </div>
                  <div className="w-full lg:w-2/3 px-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                      {chef && chef?.chef_name && chef.chef_name}
                    </h1>
                    <p className="text-gray-600 mb-4">
                      {chef && chef?.chef_desc && chef.chef_desc}
                    </p>
                    <div className="flex items-center gap-6 flex-wrap">
                      <div className="text-gray-600 mr-4 flex items-center gap-1  text-lg font-semibold">
                        <BiLike />
                        <p> {chef && chef?.likes && chef.likes} Likes </p>
                      </div>

                      <div className="text-gray-600 mr-4 flex items-center gap-1   font-semibold text-[17px]">
                        <GrUserExpert />
                        <p>
                          {chef && chef?.experience && chef.experience} Years of
                          experience
                        </p>
                      </div>
                      <div className="text-gray-600 mr-4 flex items-center gap-1   font-semibold text-lg">
                        <MdOutlineFastfood />
                        <p className="text-gray-600 mr-4">
                          {chef && chef?.recipes_id && chef.recipes_id.length}{" "}
                          Recipes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto py-6 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRecipes &&
                  filteredRecipes.map((recipe) => {
                    return (
                      <RecipeCard key={recipe.recipe_id} recipe={recipe} />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chef;
