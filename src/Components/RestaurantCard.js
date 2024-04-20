import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restData?.info;

  return (
    <div className="m-4 p-4 w-[250px] ml-[34px] bg-gray-100 rounded-md shadow-md shadow-gray-400">
      <img
        className="rounded-lg w-[100%] h-[180px]"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-1">{name}</h3>
      <div className="text-zinc-600">
        <h4 className="text-black mb-[2px]">{cuisines && cuisines.join(", ")}</h4>
        <h4 className="mb-[2px]">⭐{avgRating} stars</h4>
        <h4 className="mb-[2px]">{sla?.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
