import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.data?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mb-[100%]">
      {/* <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p> */}
      <h2>Menu</h2>
      {categories?.map((category) => (
        <RestaurantCategory data={category?.card?.card}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
