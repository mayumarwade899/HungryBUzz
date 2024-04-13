import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = restData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines && cuisines.join(", ")}</h4>
      <h4>⭐{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
