import React, { useContext, useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import { RecipesAndChefsContext } from "../../layouts/Layout";
import ChefCard from "../chefCard/ChefCard";

const ChefsContainer = () => {
  const {chefs, setChefs} = useContext(RecipesAndChefsContext)

  const [filteredChefs, setFilteredChefs] = useState([]);
  const [chefCountryCategories, setChefCountryCategories] = useState([]);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFilteredChefs(chefs)
    generateTargetCountryData(chefs)
    setIsLoading(false)
  }, [chefs])
  
  useEffect(() => {
    fetch(
      "https://chefscout.vercel.app/countryFoodName"
    )
      .then((res) => res.json())
      .then((data) => setChefCountryCategories(data));
  }, []);

  const generateTargetCountryData = (chefs) => {
    const bangladeshiChefs = chefs.filter((obj) => obj.country_code === "BGD");
    setFilteredChefs(bangladeshiChefs);
    setActiveButtonId("BGD");
  };

  const filterObjectsByCountryCode = (countryCode) => {
    const filteredChefByCountry = chefs.filter(
      (obj) => obj.country_code === countryCode
    );
    setFilteredChefs(filteredChefByCountry);
    setActiveButtonId(countryCode);
  };

  const handleAllCategory = () => {
    setFilteredChefs(chefs)
    setActiveButtonId(null);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full max-w-[1280px] m-auto px-4">
          <h3 className="text-4xl mt-24 md:text-6xl font-CoveredByYourGrace font-semibold tracking-wider text-center">
            Explore Chefs
          </h3>
          <p className="text-center mt-4 font-Raleway font-semibold lg:w-[800px] m-auto">
            Are you looking to take your cooking skills to the next level? Look
            no further than our "Explore Chef" section, where you can learn from
            experienced chefs and culinary experts. Discover new techniques,
            ingredients, and recipes that will expand your cooking horizons.
          </p>
          <div className="flex flex-wrap justify-center mt-10 w-full lg:w-fit m-auto gap-4 border px-2 lg:px-4 py-2 rounded-2xl">
            <button
              onClick={handleAllCategory}
              className={`${
                activeButtonId === null ? "bg-yellow-300" : "bg-gray-200"
              } px-4 py-1 font-Raleway font-semibold rounded-lg`}>
              All
            </button>
            {chefCountryCategories &&
              chefCountryCategories.map((obj) => {
                return (
                  <button
                    onClick={() => filterObjectsByCountryCode(obj.country_code)}
                    key={obj.id}
                    className={`px-4 py-1 font-Raleway font-semibold rounded-lg ${
                      activeButtonId === obj.country_code
                        ? "bg-yellow-300"
                        : "bg-gray-200"
                    }`}>
                    {obj.name}
                  </button>
                );
              })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  mt-10">
            {filteredChefs &&
              filteredChefs.map((chef) => (
                <ChefCard key={chef.chef_id} chef={chef} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChefsContainer;
