import React from "react";

const SingleRecipeInfoTable = ({ recipe, index }) => {
  const { recipe_image_url, name, recipe_id, price } = recipe;
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
        <td>
          ${price && price}
          <br />
        </td>
        <td>{recipe_id}</td>
        <td>
          <button className="btn btn-ghost btn-xs bg-blue-500 text-white tracking-wide ">
            Update
          </button>
          <button className="btn btn-ghost btn-xs bg-red-500 text-white tracking-wide ml-3">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleRecipeInfoTable;
