import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = restData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating} stars</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const restList = [
  {
    info: {
      id: "90161",
      name: "The Shawarma Company",
      cloudinaryImageId: "laztzexkxof8ocjuiyzk",
      locality: "Maruti Colony",
      areaName: "Patamata",
      costForTwo: "₹150 for two",
      cuisines: [
        "Lebanese",
        "Pizzas",
        "Continental",
        "Arabian",
        "North Indian",
        "South Indian",
      ],
      avgRating: 4,
      parentId: "5269",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-11 02:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-shawarma-company-maruti-colony-patamata-vijayawada-90161",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "499212",
      name: "Kaati Zone Rolls & Wraps",
      cloudinaryImageId: "gcfu92kehomkctekplh5",
      locality: "Papaiah Street",
      areaName: "Gandhi Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Bengali", "Beverages", "Desserts"],
      avgRating: 4.1,
      parentId: "248306",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-11 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-papaiah-street-gandhi-nagar-vijayawada-499212",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "499178",
      name: "WarmOven Cake & Desserts",
      cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
      locality: "Papaiah Street",
      areaName: "Gandhi Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.2,
      parentId: "9696",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-11 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-papaiah-street-gandhi-nagar-vijayawada-499178",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "499228",
      name: "Indiana Burgers",
      cloudinaryImageId: "x5oty2were1z7k79ifez",
      locality: "Papaiah Street",
      areaName: "Gandhi Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Desserts"],
      avgRating: 3.8,
      parentId: "5714",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-11 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/indiana-burgers-papaiah-street-gandhi-nagar-vijayawada-499228",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "499197",
      name: "Cupcake Bliss Cake & Desserts",
      cloudinaryImageId: "40f193d8b23afb2988489dac1258962f",
      locality: "Papaiah Street",
      areaName: "Gandhi Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 3.7,
      parentId: "66732",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-11 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-papaiah-street-gandhi-nagar-vijayawada-499197",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "70516",
      name: "Paradise Biryani",
      cloudinaryImageId: "a6dd67e831e4819214055b0840f2c4fe",
      locality: "Sriram Nagar",
      areaName: "Labbipet",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Hyderabadi"],
      avgRating: 4,
      parentId: "700",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-11 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/paradise-biryani-sriram-nagar-labbipet-vijayawada-70516",
      type: "WEBLINK",
    },
  },
];

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
        {
            restList.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
            ))
        }
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-headline">
        <h2>Company</h2>
        <ul>About</ul>
        <ul>Careers</ul>
        <ul>Team</ul>
        <ul>BuzzOne</ul>
        <ul>Hungry Instamart</ul>
      </div>

      <div className="footer-headline">
        <h2>Contact us</h2>
        <ul>Help & Support</ul>
        <ul>Partner with us</ul>
        <ul>Ride with us</ul>

        <div className="legal">
          <div className="footer-headline">
            <h2>Legal</h2>
            <ul>Terms & Conditions</ul>
            <ul>Cookie Policy</ul>
            <ul>Privacy Policy</ul>
          </div>
        </div>
      </div>

      <div className="footer-headline">
        <h2>We deliver to:</h2>
        <ul>Mumbai</ul>
        <ul>Pune</ul>
        <ul>Bangalore</ul>
        <ul>Hyderabad</ul>
        <ul>Delhi</ul>
        <ul>586 cities{">"}</ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
