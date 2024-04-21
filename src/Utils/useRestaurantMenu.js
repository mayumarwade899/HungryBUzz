import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4400802&lng=78.3489168&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
