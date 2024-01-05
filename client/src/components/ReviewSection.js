import React from "react";
import ReviewCardSection from "./ReviewCard";
import HomeSection from "./HomeSection";
import "../css/HomePage.css";

const reviewsMany = [{author: "Jane Doe", comment:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
},
{author: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
},
{author: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
},
{author: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
},
{author: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}]

const ReviewSection = () => {

  fetch("url")
      .then((r) => r.json())
      .then((resp) => {
        // onLogIn(resp);
      });
  return (
    <div className="home-container">
      <HomeSection title="What others are saying about us!">
        
        <ReviewCardSection reviews={reviewsMany}/>
      </HomeSection>
    </div>
  );
};

export default ReviewSection;
