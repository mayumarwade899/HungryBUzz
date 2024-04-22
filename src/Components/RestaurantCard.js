import { useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import UserContext from "../Utils/UserContext";

const RestaurantCard = (props) => {
  const { restData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restData?.info;

  return (
    <div className="m-4 p-4 w-[250px] ml-[34px] bg-gray-100 rounded-md shadow-md shadow-gray-400 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 hover:duration-300">
      <img
        className="rounded-lg w-[100%] h-[180px]"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-1">{name}</h3>
      <div className="text-zinc-600">
        <h4 className="text-black mb-[2px]">
          {cuisines && cuisines.join(", ")}
        </h4>
        <h4 className="mb-[2px]">⭐{avgRating} stars</h4>
        <h4 className="mb-[2px]">{sla?.slaString}</h4>
        <h4>{costForTwo}</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higher Order Function
// Input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-900 text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
