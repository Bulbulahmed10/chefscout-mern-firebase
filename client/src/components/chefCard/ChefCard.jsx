import { GrUserExpert } from "react-icons/gr";
import { MdOutlineFastfood } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefCard = ({ chef }) => {
  const {
    chef_id,
    chef_name,
    chef_photo,
    experience,
    likes,
    recipes_id,
    country_code,
  } = chef;

  const countryNameFindByCountryCode = (country_code) => {
    if (country_code === "BGD") {
      return "Bangladesh";
    } else if (country_code === "USA") {
      return "United States";
    } else if (country_code === "IND") {
      return "India";
    } else if (country_code === "JPN") {
      return "Japan";
    } else if (country_code === "ITA") {
      return "Italy";
    } else if (country_code === "PRK") {
      return "Korea";
    } else if (country_code === "FRA") {
      return "France";
    } else if (country_code === "CHN") {
      return "China";
    }
  };

  return (
    <div className="bg-white rounded-md p-6 shadow-lg">
      <div>
        <LazyLoadImage
          src={chef_photo}
     
          className="w-32 h-32 mx-auto rounded-full object-cover"
          alt="Chef Profile"
        />
        <h2 className="text-xl font-bold mt-4 font-Raleway text-center bg-slate-200 rounded-lg w-fit px-4 mx-auto">
          {chef_name}
        </h2>
        <div className="text-gray-500 mt-4  flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <GrUserExpert className="text-lg " />
            <span className="text-lg font-Raleway font-bold mt-1">
              Experience:{" "}
            </span>
            <span className="text-lg font-Raleway font-bold ml-2 mt-1">
              {" "}
              {experience} years{" "}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineFastfood className="text-lg " />
            <span className="text-lg font-Raleway font-bold mt-1">
              Total Recipes:{" "}
            </span>
            <span className="text-lg font-Raleway font-bold ml-2 mt-1">
              {recipes_id.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BiLike className="text-lg " />
            <span className="text-lg font-Raleway font-bold mt-1">Likes: </span>
            <span className="text-lg font-Raleway font-bold ml-2 mt-1">
              {likes}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <GiWorld className="text-lg " />
            <span className="text-lg font-Raleway font-bold mt-1">
              Country:
            </span>
            <span className="text-lg font-Raleway font-bold mt-1">
              {countryNameFindByCountryCode(country_code)}
            </span>
          </div>
        </div>
        <p className="text-center mt-2">
          <Link
            to={`/chef/${chef_id}`}
            state={chef_name}
            className="text-lg font-bold mt-6 font-Raleway text-center bg-blue-300 py-2 rounded-md w-fit px-4 mx-auto hover:bg-blue-200 duration-300">
            View Recipes
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
