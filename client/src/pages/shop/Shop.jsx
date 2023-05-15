import React, { useEffect, useState } from "react";
import Banner from "../../components/shared/banner/Banner";

import SingleRecipeCard from "../../components/singleRecipeCard/SingleRecipeCard";

const Shop = () => {
  // const { recipes } = useContext(RecipesAndChefsContext); //! optional
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [totalRecipesLength, setTotalRecipesLength] = useState(0);
  const totalProducts = totalRecipesLength;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const options = [9, 12, 20];
  const pagesNumbers = [...Array(totalPages).keys()];

  function handleSelectChange(event) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  useEffect(() => {
    fetch("http://localhost:4000/totalRecipes")
      .then((res) => res.json())
      .then((data) => setTotalRecipesLength(data.totalRecipes));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:4000/recipes?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await res.json();
      console.log(data);
      setRecipes(data);
    }

    fetchData();
  }, [currentPage, itemsPerPage]);

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
      <div className="text-center mb-8">
        {pagesNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={`border px-4 py-1 ${
              currentPage === number ? "bg-yellow-300" : ""
            }`}
            key={number}>
            {number}
          </button>
        ))}
        <select
          className="border px-2 py-1 cursor-pointer"
          value={itemsPerPage}
          onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Shop;
