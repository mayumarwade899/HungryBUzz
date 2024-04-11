const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="res-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;