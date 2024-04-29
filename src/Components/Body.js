import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  console.log(listOfRestaurant);
  // const arr =useState(restList)
  // // const [listOfRestaurant, setListOfRestaurant] = arr;
  // const listOfRestaurant = arr[0];
  // const setListOfRestaurant = arr[1];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-12 mb-[100%] text-red-600 text-xl">
        Looks like you're offline!!! <br></br> Please check your internet
        connection😵.
      </h1>
    );

  //Conditional Rendering
  // if(listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mb-11">
      <div className="flex justify-center mt-5">
        <button
          className="p-3 font-semibold rounded-md bg-slate-900 text-white hover:bg-slate-800"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <label className="text-xl font-bold">UserName : </label>
        <input
          className="p-1 w-1/5 text-lg font-semibold border-2 border-gray-900 rounded-sm"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
        />
      </div>
      <div className="flex justify-center p-4">
        <input
          className="p-3 w-1/5 text-lg font-semibold border-2 border-gray-900 rounded-sm"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="text-2xl text-white w-20 bg-slate-900 ml-3 hover:bg-slate-800 rounded-sm"
          type="submit"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <PromotedRestaurantCard restData={restaurant} />
            ) : (
              <RestaurantCard restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
