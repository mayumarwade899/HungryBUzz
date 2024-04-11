import RestaurantCard from "./RestaurantCard";
import restList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  const {listOfRestaurants, setListOfRestaurant} = useState(restList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restDate={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
