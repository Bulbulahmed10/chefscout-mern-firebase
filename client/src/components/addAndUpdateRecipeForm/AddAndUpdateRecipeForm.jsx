import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { RecipesAndChefsContext } from "../../layouts/Layout";
const toastConfig = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    textAlign: "center",
  },
  duration: 5000,
};

const AddAndUpdateRecipeForm = ({
  recipeUpdateForm,
  handleRecipeCancel,
  updateRecipeInfo,
  setIsAddRecipeFormShow,
  setRecipeUpdateForm,
}) => {
  const [updateRecipeInfoState, setUpdateRecipeInfoState] = useState({});
  const {  recipes,  setRecipes} = useContext(RecipesAndChefsContext);
  
  const [reloadData, setReloadData] = useState(false)
  const {
    recipe_id,
    name,
    instructions,
    ingredients,
    cooking_time,
    calcium,
    eat_time,
    cooking_difficulty,
    rating,
    price,
    recipe_image_url,
  } = updateRecipeInfoState;

  useEffect(() => {
    setUpdateRecipeInfoState(updateRecipeInfo);
  }, [updateRecipeInfo]);

  useEffect(() => {
    if(!reloadData) {
      return 
    }
    const fetchRecipes = () => {
      fetch("http://localhost:4000/recipes")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRecipes(data); // Update the state with the new data
        });
    };
    fetchRecipes();
    setReloadData(false)
  }, [reloadData, recipes]);

  const handleAddAndUpdateRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const recipe_id = !recipeUpdateForm
      ? uuidv4().toString().slice(0, 10)
      : form.recipe_id.value;
    const chef_id = form?.sellerId?.value;
    const name = form.recipeName.value;
    const instructions = form.instructions.value;
    const ingredientsStr = form.ingredients.value;
    const cooking_time = form.time.value;
    const calcium = form.calcium.value;
    const eat_time = form.eatingTime.value;
    const cooking_difficulty = form.cookingDifficulty.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const recipe_image_url = form.photoLink.value;
    const ingredients = ingredientsStr.split(",");

    const recipeInfo = {
      recipe_id,
      name,
      instructions,
      ingredients,
      cooking_time,
      calcium,
      eat_time,
      cooking_difficulty,
      rating,
      price,
      recipe_image_url,
    };
    const updateChefInfoData = { chef_id, recipe_id };


    if (!recipeUpdateForm) {
      fetch("http://localhost:4000/recipe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(recipeInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            console.log(data);
            toast.success("Recipe added successful!", toastConfig);
            setIsAddRecipeFormShow(false);
            form.reset();
            setReloadData(true)
   
          }
        });

      fetch("http://localhost:4000/chef", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateChefInfoData),
      })
      .then(res => {
        setReloadData(true)
      })

    } else {
      fetch("http://localhost:4000/recipe", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          recipe_id,
          name,
          instructions,
          ingredients,
          cooking_time,
          calcium,
          eat_time,
          cooking_difficulty,
          rating,
          price,
          recipe_image_url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            toast.success("Recipe update successful!", toastConfig);
            setIsAddRecipeFormShow(false);
            setRecipeUpdateForm(false);
            setReloadData(true)
            form.reset();
          }
        });
    }
  };



  return (
    <form
      onSubmit={handleAddAndUpdateRecipe}
      className="bg-white shadow-md px-8 py-6 my-6">
      <h2 className="text-2xl font-bold mb-6 text-center font-Raleway">
        {recipeUpdateForm ? "Update Recipe" : "Add Recipe"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        {!recipeUpdateForm && (
          <div className="mb-4">
            <label
              htmlFor="sellerId"
              className="block text-gray-700 font-medium mb-2">
              Chef ID
            </label>
            <div>
              <input
                type="text"
                id="sellerId"
                name="sellerId"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter Chef Id"
                required
              />
            </div>
          </div>
        )}
        {recipeUpdateForm && (
          <div className="mb-4">
            <label
              htmlFor="recipe_id"
              className="block text-gray-700 font-medium mb-2">
              Recipe ID
            </label>
            <div>
              <input
                defaultValue={recipe_id && recipe_id}
                type="text"
                id="recipe_id"
                name="recipe_id"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter Recipe Id"
                required
                readOnly
              />
            </div>
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="recipeName"
            className="block text-gray-700 font-medium mb-2">
            Recipe Name
          </label>
          <div className="relative">
            <input
              defaultValue={name && name}
              type="text"
              id="recipeName"
              name="recipeName"
              required
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter Recipe Name"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="instructions"
            className="block text-gray-700 font-medium mb-2">
            Instructions
          </label>
          <div className="relative">
            <input
              defaultValue={instructions && instructions}
              type="text"
              id="instructions"
              name="instructions"
              required
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter Instructions"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>
          <div className="relative">
            <input
              defaultValue={
                ingredients &&
                ingredients.map((singleIngredient) => singleIngredient)
              }
              type="text"
              id="ingredients"
              name="ingredients"
              required
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="ingredients must be coma ( , ) separated"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="time"
            className="block text-gray-700 font-medium mb-2">
            Cooking Time
            <span className="text-sm font-Raleway ml-2 font-semibold tracking-wider"></span>
          </label>
          <div className="relative">
            <input
              defaultValue={cooking_time && cooking_time}
              type="text"
              id="time"
              name="time"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter cooking time"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="calcium"
            className="block text-gray-700 font-medium mb-2">
            Calcium
          </label>
          <div>
            <input
              defaultValue={calcium && calcium}
              type="text"
              id="calcium"
              name="calcium"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter calcium"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="eatingTime"
            className="block text-gray-700 font-medium mb-2">
            Eating Time
          </label>
          <div>
            <input
              defaultValue={eat_time && eat_time}
              type="text"
              id="eatingTime"
              name="eatingTime"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter eating time,  Breakfast or Launch or Dinner"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="cookingDifficulty"
            className="block text-gray-700 font-medium mb-2">
            Cooking Difficulty
          </label>
          <div>
            <input
              defaultValue={cooking_difficulty && cooking_difficulty}
              type="text"
              id="cookingDifficulty"
              name="cookingDifficulty"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter cooking difficulty,  Easy or Medium or Hard"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-medium mb-2">
            Rating
          </label>
          <div>
            <input
              defaultValue={rating && rating}
              type="text"
              id="rating"
              name="rating"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter rating, choose one of them: 1, 2, 3, 4, 5"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2">
            Price
          </label>
          <div>
            <input
              defaultValue={price && price}
              type="text"
              id="price"
              name="price"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter Price"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="photoLink"
            className="block text-gray-700 font-medium mb-2">
            Recipe Photo Link
          </label>
          <div>
            <input
              defaultValue={recipe_image_url && recipe_image_url}
              type="text"
              id="photoLink"
              name="photoLink"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter photo url"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <p
          onClick={handleRecipeCancel}
          className="w-fit h-10 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 cursor-pointer">
          {recipeUpdateForm ? "Cancel Update" : "Cancel Add"}
        </p>
        <button
          type="submit"
          className="w-fit h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ">
          {recipeUpdateForm ? "Update Recipe" : "Add Recipe"}
        </button>
      </div>
    </form>
  );
};

export default AddAndUpdateRecipeForm;