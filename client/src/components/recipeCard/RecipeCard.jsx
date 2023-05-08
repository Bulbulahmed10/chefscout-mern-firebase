import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineHeart, AiTwotoneHeart, AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Ratings from "react-rating";
const RecipeCard = ({ recipe }) => {
  const { recipe_image_url, name, ingredients, instructions, rating } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    toast.success("Recipe is your favorite", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsFavorite(true);
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col justify-between ">
      <img
        effect="blur"
        src={recipe_image_url}
        alt={name}
        className="h-48 w-full object-cover"
      />

      <div className="px-4 py-1">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <ul className="list-disc pl-6 mb-4">
          {ingredients.map((ingredient) => (
            <li className="capitalize font-bold font-mono " key={ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
            <p className="font-mono"> {instructions} </p>
      </div>
      <div className="flex justify-between items-center px-4 pb-2">
        <div className="flex items-center mr-4">
          <div className="flex items-center gap-2">
            <Ratings
              className="text-lg"
              placeholderRating={rating}
              placeholderSymbol={<AiFillStar className="text-[#FF8A48]" />}
              emptySymbol={<AiFillStar />}
              readonly
            />
            <span className="text-lg font-bold text-[#706f6f] -mt-1">
              {rating}
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={handleFavoriteClick}
            disabled={isFavorite}
            className="text-red-500 text-2xl">
            {isFavorite ? <AiTwotoneHeart /> : <AiOutlineHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
