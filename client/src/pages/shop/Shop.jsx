import React, { useContext} from "react";
import Banner from "../../components/shared/banner/Banner";
import { RecipesAndChefsContext } from "../../layouts/Layout";
import SingleRecipeCard from "../../components/singleRecipeCard/SingleRecipeCard";

const Shop = () => {
  const { recipes } = useContext(RecipesAndChefsContext);
  return (
    <div>
      <Banner
        bannerText="Shop"
        bannerImage="https://images.unsplash.com/photo-1616225273962-05c320ca73d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
      />
      <div className="grid grid-cols-3 gap-6 w-full max-w-[1440px] m-auto mt-10">
        {recipes &&
          recipes.map((recipe) => (
            <SingleRecipeCard key={recipe.recipe_id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
