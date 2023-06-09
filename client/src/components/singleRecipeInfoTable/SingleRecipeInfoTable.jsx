import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RecipesAndChefsContext } from "../../layouts/Layout";

const SingleRecipeInfoTable = ({
  recipe,
  index,
  handleDeleteRecipe,
  handleUpdateRecipe,
}) => {
  const { chefs } = useContext(RecipesAndChefsContext);
  const { recipe_image_url, name, recipe_id, price } = recipe;
  const [chef, setChef] = useState({});
  useEffect(() => {
    const filteredData = chefs.find((item) =>
      item.recipes_id?.includes(recipe_id)
    );
    setChef({
      chef_id: filteredData?.chef_id,
      chef_name: filteredData?.chef_name,
    });
  }, []);
  return (
    <tbody>
      <tr>
        <td></td>
        <td className="text-lg font-bold font-mono"> {index + 1} </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={recipe_image_url && recipe_image_url}
                  alt={name && name}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name && name}</div>
            </div>
          </div>
        </td>
        <td className="text-blue-500">
          <Link to={`/chef/${chef && chef.chef_id}`}>
            {chef && chef.chef_name}
          </Link>
        </td>
        <td> {chef && chef.chef_id} </td>
        <td>{recipe_id}</td>

        <td>
          ${price && price}
          <br />
        </td>
        <td>
          <button
            onClick={() => handleUpdateRecipe(recipe)}
            className="btn btn-ghost btn-xs bg-blue-500 text-white tracking-wide ">
            Update
          </button>
          <button
            onClick={() =>
              handleDeleteRecipe({ recipe_id, chef_id: chef.chef_id })
            }
            className="btn btn-ghost btn-xs bg-red-500 text-white tracking-wide ml-3">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleRecipeInfoTable;
